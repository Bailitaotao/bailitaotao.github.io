# 常见的命名规范

## 1. `AaaaAa` (PascalCase / UpperCamelCase)

**名称：** 帕斯卡命名法（PascalCase），也称为大驼峰命名法（UpperCamelCase）。

**规则：** 每个单词的首字母都大写，然后直接连接在一起。

**适用场景：**

*   **类名（Class Names）：** 在绝大多数面向对象编程语言中，这是定义类的标准方式。例如：`class CustomerProfile;`、`class HttpRequest;`。
*   **组件名（Component Names）：** 在现代前端框架中（如 React, Vue, Svelte），组件的名称通常使用 PascalCase。例如：`<UserProfile />`、`<PrimaryButton />`。
*   **类型、接口、枚举名（Type, Interface, Enum Names）：** 在静态类型语言中（如 TypeScript, C#），自定义类型、接口和枚举也常使用此规范。例如：`type User = { ... };`、`enum LogLevel { ... };`。

**一句话总结：主要用于定义“类型”或“模板”级别的实体。**

---

## 2. `aaaaAa` (camelCase / lowerCamelCase)

**名称：** 驼峰命名法（camelCase），也称为小驼峰命名法（lowerCamelCase）。

**规则：** 第一个单词的首字母小写，之后每个单词的首字母都大写。

**适用场景：**

*   **变量名（Variable Names）：** 这是最常见的变量命名方式，尤其是在 JavaScript, Java, C#, C++ 等语言中。例如：`let userName;`、`const maxCount = 10;`。
*   **函数/方法名（Function/Method Names）：** 同上，函数和方法的命名也普遍使用 camelCase。例如：`function getUserById() { ... }`、`object.calculateTotal();`。
*   **对象属性名（Object Property Names）：** 特别是在 JSON 数据格式和 JavaScript 对象中，属性名几乎总是 camelCase。例如：`{ "firstName": "John", "lastName": "Doe" }`。

**一句话总结：主要用于定义“实例”或“执行动作”的实体。**

---

## 3. `aaaa-aa` (kebab-case / dash-case)

**名称：** 短横线命名法（kebab-case），也常被称为 spinal-case 或 dash-case。

**规则：** 所有字母都小写，单词之间用短横线 `-` 连接。

**适用场景：**

*   **URL 路由（URL Slugs）：** 非常适合用在 URL 中，因为它可读性好，且被搜索引擎友好地解析。例如：`https://example.com/user-profile/edit-settings`。
*   **CSS 类名和 ID（CSS Class & ID Names）：** 这是 CSS 中最推荐和最常见的命名方式。例如：`.main-container`、`#header-navigation`。
*   **HTML 自定义属性（HTML Custom Attributes）：** `data-*` 属性通常使用此规范。例如：`<div data-user-id="123"></div>`。
*   **文件名（File Names）：** 在 Web项目中，HTML、CSS、JS 等文件名常用 kebab-case，以保持 URL 的一致性。例如：`user-profile.component.js`。

**一句话总结：主要用于 Web 开发中的 URL、CSS 和文件名，因为它与 Web 标准的兼容性最好。**

---

## 4. `Aaaa-Aa` (Train-Case)

**名称：** 火车命名法（Train-Case），可以看作是 kebab-case 的首字母大写版本。

**规则：** 每个单词的首字母都大写，单词之间用短横线 `-` 连接。

**适用场景:**
这是一个相对不那么常见的规范，但偶尔也会在特定场景中出现。

*   **HTTP 请求头（HTTP Headers）：** 很多 HTTP 头的字段名遵循这个规范。例如：`User-Agent`、`Content-Type`。
*   **某些框架的组件文件名：** 在一些项目中，为了在文件名中区分组件，可能会使用这种方式。例如，在 Angular 中，文件名通常是 `kebab-case`，但如果有人想让文件名看起来更像组件名，可能会这么写（非官方推荐）。
*   **URL 路由（较少见）：** 少数情况下，URL 也可能使用这种格式，但 `kebab-case` 更为主流。

**一句话总结：在 HTTP 头部中很常见，其他地方用得较少。**

---

## 5. `aaaa_aa` (snake_case)

**名称：** 蛇形命名法（snake_case）。

**规则：** 所有字母都小写，单词之间用下划线 `_` 连接。

**适用场景：**

*   **数据库字段和表名（Database Fields & Table Names）：** 这是 SQL 数据库中非常主流的命名规范。例如：`user_id`、`first_name`、`order_details`。
*   **Python 变量和函数名：** Python 的官方风格指南（PEP 8）推荐使用 snake_case 来命名变量和函数。例如：`def calculate_average(numbers): ...`。
*   **配置文件（Config Files）：** 在 YAML、TOML 等配置文件中，键名常使用 snake_case。
*   **C/C++（传统风格）：** 在一些老的 C/C++ 代码库中，snake_case 也很常见，尤其是在 C 语言中。
*   **API 响应体（API responses）：** 很多后端（尤其是 Python/Ruby 写的）API 返回的 JSON key 会使用 snake_case。

**一句话总结：在数据库和 Python 中是绝对的主流，也常用于配置文件和某些后端 API。**

---


## 综合对比表格

| 示例 | 名称 | 规则 | 主要应用场景 |
| :--- | :--- | :--- | :--- |
| `XxxxXx` | **PascalCase** | 每个单词首字母大写 | 类、组件、类型、接口 |
| `xxxxXx` | **camelCase** | 第一个单词小写，后续大写 | 变量、函数、方法、对象属性 |
| `xxxx-xx` | **kebab-case** | 全小写，短横线连接 | URL、CSS、HTML属性、文件名 |
| `Xxxx-Xx` | **Train-Case** | 首字母大写，短横线连接 | HTTP请求头 |
| `xxxx_xx` | **snake_case** | 全小写，下划线连接 | 数据库、Python、配置文件 |