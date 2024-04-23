/**
 * 版本信息
 */
export interface VersionInfo {
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
 * 系统信息
 */
export interface SystemInfo {
    /**
     * 系统名
     */
    name: 'android' | 'ios' | 'windows' | 'linux' | 'mac' | 'harmony' | 'unknown'
    /**
     * 系统别名
     */
    alais: string
    /**
     * 系统版本
     */
    version: string;
}

/**
 * 插件信息
 */
export interface PluginInfo {
    id: string;
    version: string;
    name: string;
    options?: Record<string, any>;
}

/**
 * 平台信息
 */
export interface Platform {
    /**
     * 平台名
     */
    name: string;
    /**
     * 平台版本(raw值,用于处理非标准version)
     */
    ver: string;
    /**
     * 平台版本
     */
    version: VersionInfo;
    /**
     * 平台语言
     */
    language: string;
    /**
     * 应用信息
     */
    app: {
        /**
         * 应用id
         */
        id: string;
        /**
         * 应用版本
         */
        version: string;
        /**
         * 应用环境变量
         */
        environ: Record<string, string>
    };
    /**
     * 调试状态
     */
    debug: boolean
    /**
     * 启动信息
     */
    launch: {
        /**
         * 场景
         */
        scene: string;
        /**
         * 参数
         */
        query: Record<string, string>;
        /**
         * 转发源
         */
        referrer?: Record<string, any>;
    }
    /**
     * 插件
     */
    plugins?: PluginInfo[];
    /**
     * 平台额外信息
     */
    extension?: Record<string, any>;
}

/**
 * 固件信息
 */
export interface Firmware {
    /**
     * 设配品牌(华为、oppo、小米)
     */
    brand: string; // 设备品牌
    /**
     * 机型
     */
    model: string;  // 机型
    /**
     * 网络信息
     */
    network: {
        type: 'wifi' | 'mobile' | 'unknown';  // 网络类型
        mode?: '2g' | '2.4g' | '3g' | '4g' | '5g' | '6g' | '7g'  // 信号模式
    };
    /**
     * 系统信息
     */
    system: SystemInfo
    /**
     * 屏幕信息
     */
    screen: {
        /**
         * 屏高
         */
        height: number;
        /**
         * 屏宽
         */
        width: number;
    }
    /**
     * 设备id
     */
    device?: {
        /**
         * 设备号(androidid设备ID， IOS：IDFV)
         */
        id?: string;
        /**
         * 国际移动设备识别码
         */
        imei?: string;
        /**
         * uuid 识别码
         */
        uuid?: string;
        /**
         * 其他唯一id
         * 设备号Android: Imel>oaid>androidid IOS:IDFA|
         */
        unique?: Record<string, string>;
    };
}

/**
 * 服务端点
 */
export interface Endpoint {
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
    max: VersionInfo;
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
 * 应用信息
 */
export interface AppInfo {
    /**
     * 应用ID
     */
    id: string;
    /**
     * 应用name
     */
    name: string;
    /**
     * 应用版本
     */
    version: string;
    /**
     * 应用环境变量
     */
    environ: Record<string, string>
    /**
     * SDK应用密钥
     */
    key?: string;
    /**
     * 应用服务
     */
    services: Record<string, any>
    /**
     * 引用额外信息
     */
    extension?: Record<string, any>
}

/**
 * SDK应用信息
 */
export interface Application {
    /**
     * SDK应用信息
     */
    sdk: AppInfo;
    /**
     * 渠道应用信息
     */
    channel: AppInfo;
    /**
     * 游戏应用信息
     */
    game: AppInfo;
    /**
     * 平台信息
     */
    platform: Platform;
    /**
     * 固件信息
     */
    firmware: Firmware;
}

/**
 * 缓存接口
 */
export interface CacheStorage {
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
export interface GameRole {
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
export interface TokenInfo {
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
export interface UserInfo {
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
export interface User {
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
export interface GameProduct {
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
export interface GameOrder {
    /**
     * 游戏端订单id
     */
    sn: string;     // 游戏端订单
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
 * 用户分享信息
 */
export interface ShareLink {
    /**
     * 分享title
     */
    title: string;
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
export interface SharedInfo {
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
export interface Result {
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
     * 载荷
     */
    payload: any
}

/**
 * 通用批量执行结果
 */
export interface Results {
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
export interface HandlerResult {
    (result: Result): void
}

/**
 * 处理批量结果
 */
export interface HandlerResults {
    (results: Results): void
}

/**
 * 通用结果处理
 */
export interface Callback {
    (result?: any): void
}


/**
 * 追踪器接口
 */
export interface Tracker {

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
    PushEvent(payload: {
        event: string;
        params: Record<string, any>,
    }, callback: HandlerResult): void

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
    UserEvent(payload: { event: string, user: User, params: Record<string, any> },
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
    RoleRecharged(payload: { user: User, role: GameRole, order: GameOrder },
                  callback: HandlerResult): void

    /**
     * 角色通用事件追踪
     * @param payload
     * @param callback
     */
    RoleEvent(payload: { event: string, user: User, role: GameRole, params: Record<string, any> | null },
              callback: HandlerResult): void

}