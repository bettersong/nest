import { Module, DynamicModule, Global } from '@nestjs/common';
import { NanjiuService } from 'src/nanjiu/nanjiu.service';
import { UserService } from 'src/user/user.service';

interface Options {
    name: string
}
@Global()
@Module({
})
export class ConfigModule {
    static forRoot(options: Options): DynamicModule {
        // console.log('options', options)
        return {
            module: ConfigModule,
            providers: [
                {provide: 'config', useClass: options.name === 'nanjiu' ? NanjiuService : UserService},
            ],
            exports: [
                {provide: 'config', useClass: options.name === 'nanjiu' ? NanjiuService : UserService}
            ]
        }
    }
}
