<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [koatty](./koatty.md) &gt; [HttpController](./koatty.httpcontroller.md)

## HttpController class

HTTP controller

  HttpController  {<!-- -->IController<!-- -->}

<b>Signature:</b>

```typescript
export declare class HttpController extends BaseController 
```
<b>Extends:</b> [BaseController](./koatty.basecontroller.md)

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [body(data, contentType, encoding)](./koatty.httpcontroller.body.md) |  | Set response Body content |
|  [deny(code)](./koatty.httpcontroller.deny.md) |  | Block access |
|  [expires(timeout)](./koatty.httpcontroller.expires.md) |  | set cache-control and expires header |
|  [header(name, value)](./koatty.httpcontroller.header.md) |  | Get/Set headers. |
|  [isGet()](./koatty.httpcontroller.isget.md) |  | Whether it is a GET request |
|  [isMethod(method)](./koatty.httpcontroller.ismethod.md) |  | Determines whether the METHOD request is specified |
|  [isPost()](./koatty.httpcontroller.ispost.md) |  | Whether it is a POST request |
|  [json(data)](./koatty.httpcontroller.json.md) |  | Respond to json formatted content |
|  [param(name)](./koatty.httpcontroller.param.md) |  | Get POST/GET parameters, the POST value is priority. |
|  [redirect(urls, alt)](./koatty.httpcontroller.redirect.md) |  | Url redirect |
|  [type(contentType, encoding)](./koatty.httpcontroller.type.md) |  | Set response content-type |

