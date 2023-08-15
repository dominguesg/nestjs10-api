import { ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core/exceptions/base-exception-filter';

export class CatchAllErrorsExcetionFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    //logs em arquivo
    //enviar o erro para outra plataforma
    //etc
    return super.catch(exception, host);
  }
}
