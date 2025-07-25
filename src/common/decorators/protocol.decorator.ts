import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Protocol = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    console.log(`Protocol decorator called with data: ${data}`);
    const request = ctx.switchToHttp().getRequest();
    return request.protocol; // Returns the protocol used (http or https)
  },
);
