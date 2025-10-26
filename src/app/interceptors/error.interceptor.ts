import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'An unknown error occurred';

      if (error.error instanceof ErrorEvent) {
        // Client-side or network error
        errorMessage = `Network Error: ${error.error.message}`;
        console.error('Client-side error:', error.error.message);
      } else {
        // Backend error
        switch (error.status) {
          case 400:
            errorMessage = 'Bad Request: The request was invalid. Please check your input.';
            break;
          case 401:
            errorMessage = 'Unauthorized: Invalid API key or authentication failed.';
            break;
          case 403:
            errorMessage = 'Forbidden: You do not have permission to access this resource.';
            break;
          case 404:
            errorMessage = 'Not Found: The requested resource was not found.';
            break;
          case 429:
            errorMessage = 'Too Many Requests: Rate limit exceeded. Please try again later.';
            break;
          case 500:
            errorMessage = 'Internal Server Error: Something went wrong on the server.';
            break;
          case 503:
            errorMessage = 'Service Unavailable: The service is temporarily unavailable.';
            break;
          default:
            errorMessage = `Error ${error.status}: ${error.message}`;
        }

        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${JSON.stringify(error.error)}`
        );
      }

      // Return an observable with a user-friendly error message
      return throwError(() => new Error(errorMessage));
    })
  );
};
