/*
 * @Description: 路由配置
 * @Usage: 项目统一使用koa-router，这里配置路由属性
 * @Author: xxx
 * @Date: 2020-12-22 15:24:25
 * @LastEditTime: 2021-12-17 17:41:27
 */

export default {
    // Used koa-router

    // prefix: string;
    // /**
    //  * Methods which should be supported by the router.
    //  */
    // methods ?: string[];
    // routerPath ?: string;
    // /**
    //  * Whether or not routing should be case-sensitive.
    //  */
    // sensitive ?: boolean;
    // /**
    //  * Whether or not routes should matched strictly.
    //  *
    //  * If strict matching is enabled, the trailing slash is taken into
    //  * account when matching routes.
    //  */
    // strict ?: boolean;

    /**
     *  Other extended configuration
     */
    ext: {
        protoFile: process.env.APP_PATH + "/proto/Hello.proto", // gRPC proto file
    }
};