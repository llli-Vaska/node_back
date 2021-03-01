***本文档由 Rap2 (https://github.com/thx/rap2-delos) 生成***



***生成日期：2021-03-01 12:29:24***

# 仓库：校园招聘平台
## 模块：公司信息模块
### 接口：公司企业数据
* 地址：http://p373196l49.wicp.vip/company
* 类型：POST
* 状态码：200
* 简介：示例接口描述
* 请求接口格式：

```

```

* 返回接口格式：

```
├─ id: Number  
├─ Icon: String  
├─ CompanyName: String  
├─ Sculpture: String  
├─ CompanyPerson: String  
├─ UserName: String  
├─ UserPassword: String  
├─ Introduce: String  
├─ CompanyAddress: String  
├─ CompanyType: String  
├─ Range: String  
├─ RegisteredAddress: String  
├─ Condition: String  
├─ Time: String  
├─ Capital: String  
├─ Website: Null  
└─ CompanyToken: Null  

```


### 接口：学生数据（limit offset）
* 地址：http://p373196l49.wicp.vip/student
* 类型：POST
* 状态码：200
* 简介：无
* 请求接口格式：

```

```

* 返回接口格式：

```
├─ id: Number  
├─ number: String  
├─ name: String  
├─ sex: String  
├─ phone: String  
├─ password: String  
├─ department: String  
├─ major: String  
└─ studenttoken: String  

```


### 接口：职位数据
* 地址：http://p373196l49.wicp.vip/position
* 类型：POST
* 状态码：200
* 简介：无
* 请求接口格式：

```

```

* 返回接口格式：

```
├─ id: Number  
├─ TitlePosition: String  
├─ Degree: String  
├─ Salary: String  
├─ Welfare: String  
├─ Technology: String  
├─ Duty: String  
├─ Region: String  
└─ Number: String  

```


### 接口：学生数据（未限制数据数量）{所有}
* 地址：http://p373196l49.wicp.vip/studentall
* 类型：POST
* 状态码：200
* 简介：无
* 请求接口格式：

```

```

* 返回接口格式：

```
├─ id: Number  
├─ number: String  
├─ name: String  
├─ sex: String  
├─ phone: String  
├─ password: String  
├─ department: String  
├─ major: String  
└─ studenttoken: String  

```


### 接口：宣讲会数据
* 地址：http://p373196l49.wicp.vip/cplall
* 类型：POST
* 状态码：200
* 简介：无
* 请求接口格式：

```

```

* 返回接口格式：

```
├─ Icon: String  
├─ CompanyName: String  
├─ publiclecture.id: Number  
├─ publiclecture.CompanyId: String  
├─ publiclecture.date: String  
├─ publiclecture.school: String  
├─ publiclecture.address: String  
├─ publiclecture.link: String  
└─ publiclecture.introduction: String  

```


### 接口：添加宣讲活动
* 地址：http://p373196l49.wicp.vip/addpl
* 类型：POST
* 状态码：200
* 简介：无
* 请求接口格式：

```

```

* 返回接口格式：

```

```


### 接口：学生登录接口
* 地址：http://p373196l49.wicp.vip/studentlogin
* 类型：POST
* 状态码：200
* 简介：无
* 请求接口格式：

```
└─ ruleForm: Object 
   ├─ number: Number  
   └─ password: Number  

```

* 返回接口格式：

```
├─ code: Number  
├─ msg: String  
└─ studenttoken: String  

```