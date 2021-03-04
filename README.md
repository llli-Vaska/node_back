***本文档由 Rap2 (https://github.com/thx/rap2-delos) 生成***

***本项目仓库：[http://rap2.taobao.org/repository/editor?id=276416](http://rap2.taobao.org/repository/editor?id=276416) ***

***生成日期：2021-03-04 13:04:17***

# 仓库：校园招聘平台
## 模块：公司信息模块
### 接口：公司企业数据
* 地址：http://p373196l49.wicp.vip/company
* 类型：POST
* 状态码：200
* 简介：示例接口描述
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1877396](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1877396)
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
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1877397](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1877397)
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
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1877398](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1877398)
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
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1877399](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1877399)
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
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1878458](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1878458)
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
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1878462](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1878462)
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
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1888094](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1888094)
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


### 接口：所登录账号的收藏夹所收藏的职位信息
* 地址：http://p373196l49.wicp.vip/collection
* 类型：POST
* 状态码：200
* 简介：接口具体响应数据根据postman自寻查看
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1892770](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1892770)
* 请求接口格式（number为学生所登录的账号也是其学号[目前有数据的账号为1830630614]）：

```
└─ number: Number  

```

* 返回接口格式：

```
└─ __root__: Array 
   ├─ id: Number  
   ├─ TitlePosition: String  
   ├─ CompanyName: String  
   ├─ Degree: String  
   ├─ Salary: String  
   ├─ Welfare: String  
   ├─ Technology: String  
   ├─ Duty: String  
   ├─ Region: String  
   ├─ Number: String  
   └─ state: String  

```