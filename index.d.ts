declare namespace MiniGameTypes {

    /**
     * rfc3986  fast-uri.URIComponent
     */
    interface URIComponent {
        scheme?: string;
        userinfo?: string;
        host?: string;
        port?: number | string;
        path?: string;
        query?: string;
        fragment?: string;
        reference?: string;
        error?: string;
    }

    /**
     * 版本信息
     */
    interface VersionInfo {
        /**
         * 主版本
         */
        major: number;
        /**
         * 副版本
         */
        minor: number;
        /**
         * 补丁
         */
        patch: number;
    }


    /**
     * 插件信息
     */
    interface PluginInfo {
        /**
         * 插件名
         */
        name: string;
        /**
         * 插件是否禁用
         */
        disabled?: boolean;
        /**
         * 插件控制开关
         */
        switch?: Record<string, boolean>
        /**
         * 唯一主键
         */
        uniques?: Record<string, string>;
        /**
         * 额外参数
         */
        options?: Record<string, any>;
    }


    /**
     * 应用平台信息
     */
    interface PlatformInfo {
        /**
         * 平台识别id  e.g  wx1000451 / com.app.name
         */
        id: string;
        /**
         * 平台控制开关
         */
        switch?: Record<string, boolean>
        /**
         * 平台唯一值
         */
        uniques?: Record<string, string>
        /**
         * 平台参数
         */
        options?: Record<string, any>
    }


    /**
     * 应用渠道信息
     */
    interface ChannelInfo {
        /**
         * 渠道识别name
         */
        name: string;
        /**
         * 渠道控制开关
         */
        switch?: Record<string, boolean>
        /**
         * 渠道唯一值
         */
        uniques?: Record<string, string>
        /**
         * 渠道参数
         */
        options?: Record<string, any>
    }


    /**
     * 硬件信息
     */
    interface Hardware {
        /**
         * 设备类型(平板/手机/电脑/笔记本/随身设备)
         */
        device: "Tablet" | "Phone" | "PC" | "NB" | "WB" | "Unknown";
        /**
         * 固件版本
         */
        version: string;
        /**
         * 设备别名
         * "iphone" | "ipad" | "pad" | "pc" | "notebook" | "watch";
         */
        alais?: string;
        brand?: string;
        model?: string;
    }


    /**
     * 广告联盟ID
     */
    interface CAID {
        /**
         * caid
         */
        caid: string;
        /**
         * caid版本
         */
        version: string;
    }


    /**
     * Identifies 身份时标
     */
    interface Identifies {
        /**
         * 开放id
         */
        openid?: string;
        /**
         * 唯一用户id
         */
        unionid?: string;
        /**
         * md5(ip + ua)
         */
        ipua?: string;
        /**
         * IOS广告标示符
         */
        idfa?: string;
        /**
         * IOS基于供应商界别的识标ID
         */
        idfv?: string;
        /**
         * IOS设备的唯一识别码
         */
        udid?: string;
        /**
         * 国际移动设备识别码
         */
        imei?: string;
        /**
         * Android设备ID(android_id)
         */
        aid?: string;
        /**
         * Android开放广告ID
         */
        oaid?: string;
        /**
         * 物理地址
         */
        mac?: string;
        /**
         * 广告联盟时标
         */
        caid?: CAID[];
        /**
         * 其他唯一主键
         */
        uniques?: Record<string, string>;
    }


    /**
     * 模板
     */
    interface Template {
        /**
         * 模板格式
         */
        format: "string" | "html" | "json" | "raw";
        /**
         * 正文是否压缩(zip后base64)
         */
        compressed?: boolean;
        /**
         * 模板正文
         */
        content: string;
    }


    /**
     * 服务端点
     */
    interface Endpoint {
        /**
         * 端点版本
         */
        id: VersionInfo;
        /**
         * 端点名
         */
        name: string;
        /**
         * 支持的最小版本
         */
        min?: VersionInfo;
        /**
         * 支持的最大版本
         */
        max?: VersionInfo;
        /**
         * 端点地址
         */
        url: string;
        /**
         * 端点状态 当前/过时
         */
        status: 'CURRENT' | 'DEPRECATED';
    }

    /**
     * 服务端点获取, 用于服务端点动态获取
     */
    interface Endpoints {
        /**
         * 获取服务端点地址
         */
        url: string;
        /**
         * 获取服务端点对象
         */
        anyone: Endpoint;

        /**
         * 按版本过滤
         */
        Filter(version: string): Endpoint | undefined;

        /**
         * 重设服务端点列表
         * @param endpoints
         */
        Reset(endpoints: Endpoint[]): void
    }


    interface LaunchOptions {
        deeplink?: string;
        opts?: Record<string, string>;
        query: Record<string, string>;
        referrer?: Record<string, any>;
    }


    export type SystemEnum = 'Android' | 'IOS' | 'Windows' | 'Linux' | 'Unix' | 'Mac' | 'Harmony' | 'UnknownSYS';


    interface LaunchSystem {
        /**
         * 系统名
         */
        name: SystemEnum;
        /**
         * 系统别名
         */
        alais?: string;
        /**
         * 系统版本
         */
        version: string;
        /**
         * 其他吧岸本信息
         */
        versions?: Record<string, string>;
        /**
         * 网络类型
         */
        network: 'wifi' | 'mobile' | 'unknown';
        /**
         * 网络速率
         */
        freq?: '2g' | '2.4g' | '3g' | '4g' | '5g' | '6g' | '7g';
        /**
         * ip地址
         */
        ip?: string;
        /**
         * user agent
         */
        ua?: string;
        /**
         * 设备性能等级
         */
        benchmark?: number
    }

    /**
     * 平台启动参数
     */
    interface LaunchPlatform {
        /**
         * 应用平台pf.apk(安卓原生)/pf.ipa(苹果原生)/pf.h5/pf.wx(微信)/pf.alipay(支付宝)等
         */
        name: string;
        /**
         * 原生应用传原生应用包名,非原生传应用id
         */
        pkg: string;
        /**
         * 平台别名
         */
        alais?: string;
        /**
         * 平台模式native(原生)/minigame(小游戏)/webview(浏览器套壳应用)/html(普通html)
         */
        mode?: 'native' | 'minigame' | 'webview' | 'html';
        version?: string;
        versions?: Record<string, string>;
    }


    // 启动数据
    interface LaunchMetadata {
        /**
         * 身份识标
         */
        ids: Identifies;
        /**
         * 平台信息
         */
        pf: LaunchPlatform;
        /**
         * 系统信息
         */
        sys: LaunchSystem;
        /**
         * 硬件信息
         */
        hdw: Hardware;
        /**
         * 启动参数
         */
        lau: LaunchOptions;
        /**
         * 版本信息(sdk版本/api版本/game版本)
         */
        versions: Record<string, string>;
        /**
         * 标签
         */
        tag?: string;
        /**
         * 其他标签
         */
        tags?: Record<string, string>;
    }


    /**
     * 支付配置
     */
    interface Merchant {
        /**
         * 支付方式 e.g wx.midas(米大师支付)
         */
        mode: string;
        /**
         * 支付方式优先级
         */
        priority: number;
        /**
         * 支付方式已禁用
         */
        disabled: boolean;
        /**
         * 数量值
         */
        quantities?: Record<string, number>;
        /**
         * 支付唯一值
         */
        uniques?: Record<string, string>
        /**
         * 支付参数
         */
        options?: Record<string, any>
    }


    /**
     * 游戏引擎配置,用于注入游戏引擎
     */
    interface GameEngine {
        /**
         * 引擎名
         */
        name: string;
        /**
         * 引擎版本
         */
        version: string,
        /**
         * 引擎模块
         */
        module?: any
        /**
         * 额外参数
         */
        options?: Record<string, any>
    }

    /**
     * 应用信息
     */
    interface Application {
        /**
         * 应用id
         */
        id: string;
        /**
         * 应用名
         */
        name: string;
        /**
         * 前端公钥
         */
        key: string;
        /**
         * 其他唯一键值
         */
        uniques: Record<string, string>
        /**
         * 平台信息
         */
        platform: PlatformInfo;
        /**
         * 渠道信息
         */
        channel: ChannelInfo;
        /**
         * 可用服务
         */
        services: Record<string, Endpoint[]>
        /**
         * 应用环境变量(参数)
         */
        environ: Record<string, string>
        /**
         * 应用控制开关
         */
        switch?: Record<string, boolean>
        /**
         * 应用模板
         */
        templates?: Record<string, Template>;
        /**
         * 可用支付方式(默认屏蔽显示)
         */
        merchants?: Merchant[];
        /**
         * 插件配置
         */
        plugins?: PluginInfo[];
        /**
         * 启动元数据
         */
        metadata: LaunchMetadata;
        /**
         * 服务端点（通过services数据生成）
         */
        endpoints: Record<string, Endpoints>;
        /**
         * 游戏引擎信息
         */
        engine?: GameEngine
    }


    /**
     * 缓存接口
     */
    interface CacheStorage {
        /**
         * 设置缓存
         * @param key
         * @param value
         */
        Set(key: string, value: string): void

        /**
         * 取出缓存
         * @param key
         */
        Get(key: string): string

        /**
         * 以json形式取出
         * @param key
         */
        GetJson(key: string): Record<string, any> | null;

        /**
         * 保存json
         * @param key
         * @param value
         * @return 是否保存成功
         */
        SetJson(key: string, value: Record<string, any>): boolean;

    }


    /**
     * 游戏角色信息
     */
    interface GameRole {
        /**
         * 角色id
         */
        id: string;
        /**
         * 角色名
         */
        name: string;
        /**
         * 角色等级
         */
        level: number;
        /**
         * 角色vip等级
         */
        vip: string;
        /**
         * 角色余额(不确定的类型,可能为游戏币,也可能是真实货币,统计用)
         */
        balance?: number;
        /**
         * 角色服务器信息
         */
        server: {
            /**
             * 服务器id
             */
            id: string;
            /**
             * 服务器名
             */
            name: string;
            /**
             * 服务器全局id
             */
            gid?: string;
        },
        /**
         * 角色联盟信息
         */
        union?: {
            /**
             * 联盟id
             */
            id: string;
            /**
             * 联盟名
             */
            name: string;
            /**
             * 联盟等级
             */
            level?: number;
            /**
             * 角色在联盟中的职位
             */
            post?: string;
        }
        /**
         * 角色扩展信息
         */
        extension?: Record<string, any>;
    }


    /**
     * token 信息
     */
    interface TokenInfo {
        /**
         * token 载荷
         */
        id: string;
        /**
         * token模式
         */
        mode?: string;
        /**
         * 刷新 token用的refresh key
         */
        refresh?: string,
        /**
         * 认证信息
         */
        auth?: {
            /**
             * 授权模式
             */
            mode: string;
            /**
             * 授权范围
             */
            scopes: string[];
        }
        /**
         * 平台用户额外信息
         */
        extension?: Record<string, any>;
    }


    /**
     * 用户信息
     */
    interface UserInfo {
        /**
         * S用户ID
         */
        uid: string;
        /**
         * 用户序列号
         */
        sn?: number;
        /**
         * 用户vip等级
         */
        vip?: number;
        /**
         * 用户角色
         */
        role?: string;
        /**
         * 用户状态
         */
        status?: string[];
        /**
         * 用户其他唯一id
         */
        unique?: Record<string, string>;
        /**
         * 用户token
         */
        token: TokenInfo;
        /**
         * 是否新注册用户
         */
        registered: boolean;
        /**
         * 用户过期时间
         */
        expire_at: number;
        /**
         * 用户额外信息
         */
        extension?: Record<string, any>;
    }


    /**
     * 全用户信息
     */
    interface User {
        /**
         * sdk用户
         */
        sdk: UserInfo;
        /**
         * 平台用户
         */
        platform: UserInfo;
        /**
         * 渠道用户
         */
        channel: UserInfo;
        /**
         * 新注册用户
         */
        registered: boolean
    }


    /**
     * 产品信息
     */
    interface GameProduct {
        /**
         * 产品ID
         */
        id: string;
        /**
         * 产品名
         */
        name: string;
        /**
         * 总金额
         */
        money: number;
        /**
         * 国家货币代码(默认CNY)
         */
        code?: string;
        /**
         * 批量购买信息
         */
        bulk?: {
            /**
             * 购买数量
             */
            quantity: number;
            /**
             * 购买单价
             */
            univalent: number;
        };
    }


    /**
     * 游戏订单
     */
    interface GameOrder {
        /**
         * 游戏端订单流水号
         */
        sn: string;
        /**
         * 游戏角色
         */
        role: GameRole,
        /**
         * 订单产品信息
         */
        product: GameProduct,
        /**
         * 订单平台信息
         */
        platform: Record<string, any>,
        /**
         * 订单穿透转发数据
         */
        forward?: Record<string, string>,
        /**
         * 额外信息
         */
        extension?: Record<string, any>;
    }


    /**
     * 付款信息
     */
    interface Payment {
        /**
         * 支付订单流水号(sdk支付订单id)
         */
        sn: string
        /**
         * 外部订单id
         */
        tid: string;
        /**
         * 支付金额
         */
        money: string;
        /**
         * 支付方式
         */
        mode: string;
        /**
         * 国家货币代码(默认CNY)
         */
        code?: string;
        /**
         * 载荷
         */
        payload?: any;
    }


    /**
     * 用户分享信息
     */
    interface ShareLink {
        /**
         * 分享title
         */
        title: string;
        /**
         * 分享正文
         */
        content?: string;
        /**
         * 分享路径
         */
        path: string;
        /**
         * 分享的图片url
         */
        url: string;
        /**
         * 分享携带的url query
         */
        query: Record<string, string>;
        /**
         * 扩展信息
         */
        extension?: Record<string, any>;
    }


    /**
     * 分享通用结构
     */
    interface SharedInfo {
        /**
         * 用户分享信息
         */
        link: ShareLink;
        /**
         * 分享回调函数
         */
        callback: HandlerResult;
    }


    /**
     * 通用结果
     */
    interface Result {
        /**
         * 结果码
         * 0 成功
         * 非0值表失败
         */
        code: number;
        /**
         * 结果触发器
         */
        trigger: string;
        /**
         * 载荷,载荷结构由code与trigger决定
         * 一般情况下,正确返回的载荷是固定的
         * 错误返回根据错误码与trigger确定载荷结构
         */
        payload: any
    }


    /**
     * 通用批量执行结果
     */
    interface Results {
        /**
         * 异常结果数量
         * == 0 无异常
         * < 0 未执行
         * > 0 异常结果数量(等同于errors.length)
         */
        failure: number;
        /**
         * 结果触发器
         */
        trigger: string;
        /**
         * 成功结果列表
         */
        success: Result[];
        /**
         * 错误列表
         */
        errors: Result[];
    }


    /**
     * 处理结果
     */
    interface HandlerResult {
        (result: Result): void
    }


    /**
     * 处理批量结果
     */
    interface HandlerResults {
        (results: Results): void
    }


    interface ExtHandler {
        (params: any, callback: HandlerResult): void
    }


    interface LoginHook {
        (user: User): void
    }


    /**
     * 弹窗接口
     */
    export interface ConfirmDialog {
        /**
         * 弹窗可以关闭
         */
        close?: boolean;
        /**
         * 弹窗标题
         */
        title: string;
        /**
         *    弹窗正文
         */
        content: string;
        /**
         * 确认按钮文本
         */
        confirm: string;
        /**
         * 取消按钮文本
         */
        cancel?: string;
        /**
         * 外部链接
         */
        link?: string;
        /**
         * 控制开关
         */
        switch?: Record<string, boolean>
        /**
         * 额外参数
         */
        options?: Record<string, any>
    }

    /**
     * 确认弹窗
     */
    interface HandlerConfirmDialog {
        (param: {
            dialog: ConfirmDialog;
            user?: User;
            role?: GameRole;
            options?: Record<string, any>
        }, callback: HandlerResult): void;
    }


    /**
     * 文本检查
     */
    interface HandlerTextCheck {
        (param: { content: string; user: User; options?: Record<string, any> }, callback: HandlerResult): void;
    }

    /**
     * 图片检查
     */
    interface HandlerImageCheck {
        (param: {
             uri: URIComponent;
             user: MiniGameTypes.User;
             options?: Record<string, any>;
         }, callback: MiniGameTypes.HandlerResult
        ): void
    }

    /**
     * 媒体(音频、视频等)检查
     */
    interface HandlerMediaCheck {
        (param: {
             uri: URIComponent;
             user: MiniGameTypes.User;
             options?: Record<string, any>;
         },
         callback: MiniGameTypes.HandlerResult
        ): void
    }


    /**
     * token刷新
     */
    interface HandlerTokenRefresh {
        (param: { params: any; user: User }, callback: HandlerResult): void;
    }


    /**
     * 获取支付方式
     */
    interface HandlerPayMethod {
        (param: { order: GameOrder, params: Record<string, any>; user: User }, callback: HandlerResult): void;
    }


    /**
     * 支付
     */
    interface HandlerPay {
        (param: {
            /**
             * 下单
             */
            order: GameOrder,
            /**
             * 下单参数
             */
            params: Record<string, any>;
            /**
             * 账号信息
             */
            user: User,
            /**
             * 支付方式返回参数
             */
            payment: any
        }, callback: HandlerResult): void;
    }


    /**
     * 通用结果处理
     */
    interface Callback {
        (result?: any): void
    }


    /**
     * 追踪器接口
     */
    interface Tracker {

        /**
         * 重试接口
         * @param payload
         * @constructor
         */
        Retry(payload: { user?: User, role?: GameRole }): void

        /**
         * 通用事件
         * @param payload
         * @param callback
         */
        PushEvent(payload: { event: string; params?: Record<string, any> | null },
                  callback: HandlerResult): void

        /**
         * 用户创建追踪
         * @param payload
         * @param callback
         */
        UserCreate(payload: { user: User }, callback: HandlerResult): void

        /**
         * 用户登录追踪
         * @param payload
         * @param callback
         */
        UserLogin(payload: { user: User }, callback: HandlerResult): void

        /**
         * 用户登出追踪
         * @param payload
         * @param callback
         */
        UserLogout(payload: { user: User, role: GameRole | null }, callback: HandlerResult): void

        /**
         * 用户通用事件追踪
         * @param payload
         * @param callback
         */
        UserEvent(payload: { event: string, user: User, params?: Record<string, any> | null },
                  callback: HandlerResult): void

        /**
         * 角色登录追踪
         * @param payload
         * @param callback
         */
        RoleLogin(payload: { user: User, role: GameRole }, callback: HandlerResult): void


        /**
         * 角色创建追踪
         * @param payload
         * @param callback
         */
        RoleCreate(payload: { user: User, role: GameRole }, callback: HandlerResult): void

        /**
         * 角色升级追踪
         * @param payload
         * @param callback
         */
        RoleUpLevel(payload: { user: User, role: GameRole, level: number }, callback: HandlerResult): void

        /**
         * 角色支付追踪
         * @param payload
         * @param callback
         */
        RoleRecharged(payload: {
                          id: string,
                          user: User,
                          order: GameOrder,
                          payment: Payment,
                          params: Record<string, any>
                      },
                      callback: HandlerResult): void

        /**
         * 角色通用事件追踪
         * @param payload
         * @param callback
         */
        RoleEvent(payload: {
                      event: string,
                      user: User,
                      role: GameRole,
                      params?: Record<string, any> | null
                  },
                  callback: HandlerResult): void

    }


    /**
     * 用于判断sdk支持插件
     */
    interface PluginAbleSDK {
        /**
         * 应用
         */
        app: Application;

        /**
         * 存储
         */
        storage: CacheStorage

        /**
         * http请求客户api
         */
        request: HttpRequestHandler

        /**
         * 注册追踪器
         */
        RegTracker(name: string, tracker: Tracker): void;

        /**
         * 注册Hook
         */
        RegHook(name: string, callback: HandlerResult): void;

        /**
         * 推送数据
         */
        Publish(name: string, result: Result): void;
    }


    /**
     * 插件
     */
    interface Plugin {

        /**
         * 插件名
         */
        name: string;

        /**
         * Sdk 初始化后调用
         */
        AfterInitialize(results: Results): void

        /**
         * 登录完成后调用
         * @param user
         */
        AfterLogin(user: User): void

        /**
         * 插件同步方法调用
         */
        Execute(param?: any): Result

        /**
         * 插件异步方法调用
         */
        Call(params: any, callback: HandlerResult): void

    }


    /**
     * 插件类类
     */
    interface PluginLoder {
        new(config: PluginInfo, sdk: PluginAbleSDK): Plugin
    }


    /**
     * 通用 http请求结构
     */
    interface HttpRequest {
        /**
         * 请求的url
         */
        url: string;
        /**
         * 请求方法
         */
        method: 'POST' | 'GET' | 'PUT'
        /**
         * 请求头
         */
        headers?: Record<string, string>
        /**
         * 返回的数据类型
         */
        accept: 'json' | 'string'
        /**
         * 请求body
         */
        body: string | Record<string, any>;
    }


    /**
     * 通用 http返回结构
     */
    interface HttpResponse {
        /**
         * http结果状态码
         */
        code: number
        /**
         * http请求结果的headers
         */
        headers?: Record<string, string>
        /**
         * http请求结果的返回数据
         */
        content: string | Record<string, any>;
    }


    /**
     * 通用http request handler
     * @param req
     * @param callback
     * @constructor
     */
    interface HttpRequestHandler {
        (req: HttpRequest, callback: HandlerResult): void
    }
}