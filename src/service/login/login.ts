/*
 * @Author       : zuohy
 * @Date         : 2024-02-22 16:19:17
 * @LastEditTime : 2024-02-22 16:37:28
 * @LastEditors  : zuohy
 * @Description  : 
 */
import hyRequest from "..";

export function accountLoginRequest(account: any) {
    return hyRequest.post({
        url: '/login',
        data: account
    })
}