declare namespace SearchParams {
    /** object / json 转 search params
     * @param obj 需要转换的数据
     * @param url 地址（可选）
     * @param opts 配置项（可选）
     * @return string
     */
    function combine(obj: any, url?: string, opts?: { useEncode: boolean }): string;
    /** 获取所有请求参数
     * @param url 完整地址 url 或 search (需带'?')
     * @return object / json
     */
    function getAll(url?: string): any;
    /** 获取指定参数的值 
     * @param name 参数名
     * @param url 完整地址 url 或 search (需带'?')
     * @return string
    */
    function getByName(name: string, url?: string): string;
    /** 批量获取指定参数 
     * @param names 参数名数组
     * @param url 完整地址 url 或 search (需带'?')
     * @return object / json
    */
    function getByNames(names: string[] | { name: string; alias?: string }[], url?: string): any;
}

export = SearchParams;