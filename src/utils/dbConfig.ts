interface DbConfig {
    type: string,
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    entities: string[],
    synchronize: boolean,
    autoLoadEntities: boolean
}
// 数据库配置
export function dbConfig()  {
    return {
        type: 'mysql', // 数据库类型
        host: '127.0.0.1', // 数据库地址
        port: 3306, // 端口
        username: 'root', // 用户名
        password: 'sy19970815', // 密码
        database: 'nanjiu', // 数据库名
        entities: [__dirname + '/../**/*.entity{.ts,.js}'], // 实体类
        synchronize: true, // 自动创建表
        autoLoadEntities: true, // 自动加载实体类
    } as DbConfig
}