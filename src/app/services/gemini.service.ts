import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError, delay, retry, retryWhen, mergeMap, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private apiUrl = environment.geminiApiUrl;
  private apiKey = environment.geminiApiKey;
  private requestCount = 0;
  private readonly maxRequestsPerMinute = 60;
  private readonly requestDelay = 1000; // 1 second between requests
  private lastRequestTime = 0;

  constructor(private http: HttpClient) {}

  generateResponse(prompt: string): Observable<string> {
    // Rate limiting check
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;

    // Wait if needed to respect rate limit
    const waitTime = timeSinceLastRequest < this.requestDelay
      ? this.requestDelay - timeSinceLastRequest
      : 0;

    return of(null).pipe(
      delay(waitTime),
      mergeMap(() => {
        this.lastRequestTime = Date.now();
        this.requestCount++;

        const url = `${this.apiUrl}?key=${this.apiKey}`;

        const body = {
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        };

        const headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });

        return this.http.post<any>(url, body, { headers }).pipe(
          // Retry on rate limit errors (429)
          retryWhen(errors =>
            errors.pipe(
              mergeMap((error, index) => {
                // Retry up to 3 times with exponential backoff
                if (error.status === 429 && index < 3) {
                  const retryDelay = Math.pow(2, index) * 1000; // 1s, 2s, 4s
                  console.log(`Rate limited. Retrying in ${retryDelay}ms...`);
                  return of(error).pipe(delay(retryDelay));
                }
                return throwError(() => error);
              })
            )
          ),
          map(response => {
            // Extract text from Gemini response
            if (response.candidates && response.candidates.length > 0) {
              return response.candidates[0].content.parts[0].text;
            }
            throw new Error('No response from AI');
          }),
          catchError(error => {
            console.error('Gemini API Error:', error);
            if (error.status === 429) {
              return throwError(() => new Error('Rate limit exceeded. Please wait a moment and try again.'));
            }
            return throwError(() => new Error('Failed to get AI response. Please try again.'));
          })
        );
      })
    );
  }

  generateResponseWithContext(messages: string[]): Observable<string> {
    // For context-aware conversations
    const conversationHistory = messages.join('\n');
    return this.generateResponse(conversationHistory);
  }
}
