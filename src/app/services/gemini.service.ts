import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private apiUrl = environment.geminiApiUrl;
  private apiKey = environment.geminiApiKey;

  constructor(private http: HttpClient) {}

  generateResponse(prompt: string): Observable<string> {
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
      map(response => {
        // Extract text from Gemini response
        if (response.candidates && response.candidates.length > 0) {
          return response.candidates[0].content.parts[0].text;
        }
        throw new Error('No response from AI');
      }),
      catchError(error => {
        console.error('Gemini API Error:', error);
        return throwError(() => new Error('Failed to get AI response. Please try again.'));
      })
    );
  }

  generateResponseWithContext(messages: string[]): Observable<string> {
    // For context-aware conversations
    const conversationHistory = messages.join('\n');
    return this.generateResponse(conversationHistory);
  }
}
