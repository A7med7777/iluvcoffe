import { date } from '@hapi/joi';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class WrapResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('WrapResponseInterceptor: Intercepting request...');
    return next.handle().pipe(map((data) => ({ data })));
  }
}
