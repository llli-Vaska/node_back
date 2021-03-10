***本文档由 Rap2 (https://github.com/thx/rap2-delos) 生成***

***本项目仓库：[http://rap2.taobao.org/repository/editor?id=276416](http://rap2.taobao.org/repository/editor?id=276416) ***

***生成日期：2021-03-10 12:40:24***

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


### 接口：所登录账号的收藏夹所收藏的职位信息
* 地址：http://p373196l49.wicp.vip/collection
* 类型：POST
* 状态码：200
* 简介：接口具体响应数据根据postman自寻查看
* 请求接口格式：

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


### 接口：学生注册接口
* 地址：http://p373196l49.wicp.vip/studentregister
* 类型：POST
* 状态码：200
* 简介：code为-1时为账号已被注册 即注册失败
* 请求接口格式：

```
├─ name: String  (姓名)
├─ sex: String  (性别)
├─ number: String  (学号（登录账号）)
├─ password: String  (密码)
├─ phone: String  (手机号)
├─ department: String  (系别)
└─ major: String  (专业)

```

* 返回接口格式：

```
├─ code: Number  
└─ msg: String  

```


### 接口：企业公司登录接口
* 地址：http://p373196l49.wicp.vip/companylogin
* 类型：POST
* 状态码：200
* 简介：无
* 请求接口格式：

```
├─ UserName: String  (账号（手机号）)
└─ UserPassword: String  (密码)

```

* 返回接口格式：

```
├─ code: Number  
├─ msg: String  
└─ CompanyToken: String  

```


### 接口：企业公司注册接口
* 地址：http://p373196l49.wicp.vip/companyregister
* 类型：POST
* 状态码：200
* 简介：注册失败 返回code:-1
* 请求接口格式：

```
├─ CompanyName: String  (公司名)
├─ CompanyPerson: String  (法人)
├─ UserName: String  (账号（手机号）)
└─ UserPassword: String  (密码)

```

* 返回接口格式：

```
├─ code: Number  
└─ msg: String  

```


### 接口：添加收藏
* 地址：http://p373196l49.wicp.vip/addcollection
* 类型：POST
* 状态码：200
* 简介：当code为-1时说明改职位已经被收藏
* 请求接口格式：

```
├─ number: String (必选) (登录用户的账号（学号）)
└─ id: String  (所添加职位的id)

```

* 返回接口格式：

```
├─ msg: String  
└─ code: Number  

```


### 接口：取消收藏
* 地址：http://p373196l49.wicp.vip/cancelcollection
* 类型：POST
* 状态码：200
* 简介：无
* 请求接口格式：

```
├─ number: String  (用户登录账号（学号）)
└─ id: String  (所要取消收藏的职位信息id)

```

* 返回接口格式：

```
├─ msg: String  
└─ code: Number  

```


### 接口：判断该职位是否收藏
* 地址：http://p373196l49.wicp.vip/judgecollection
* 类型：POST
* 状态码：200
* 简介：code为0表示未收藏，为1表示已收藏
* 请求接口格式：

```
├─ number: String  (用户登录账号)
└─ id: String  (要判断的职位id)

```

* 返回接口格式：

```
├─ msg: String  
└─ code: Number  

```


### 接口：简历上传接口
* 地址：http://p373196l49.wicp.vip/resumemessage
* 类型：POST
* 状态码：200
* 简介：code为-1时说明已经投递过该职位
* 请求接口格式：

```
├─ DataForm: Object 
│  ├─ number: String  (登录用户账号)
│  └─ id: Number  (投递的该职位id)
└─ url: String  (url = this.resumeUrl)

```

* 返回接口格式：

```
├─ code: Number  
└─ msg: String  

```


### 接口：学生用户查询已投递的职位
* 地址：http://p373196l49.wicp.vip/sendedposition
* 类型：POST
* 状态码：200
* 简介：注意返回的是一个数组对象
* 请求接口格式：

```
└─ number: String  (登录账号)

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


### 接口：企业查询投递了该公司的职位的用户简历
* 地址：http://p373196l49.wicp.vip/companyresume
* 类型：POST
* 状态码：200
* 简介：注意返回的是一个数组对象|resume_url是用户简历的url地址
* 请求接口格式：

```
└─ UserName: String  (公司企业登录账号)

```

* 返回接口格式：

```
└─ __root__: Array 
   ├─ id: Number  
   ├─ student_id: String  
   ├─ position_id: String  
   ├─ resume_url: String  (用户简历的url地址)
   ├─ company_id: String  
   ├─ number: String  
   ├─ name: String  
   ├─ sex: String  
   ├─ phone: String  
   ├─ password: String  
   ├─ department: String  
   ├─ major: String  
   └─ studenttoken: String  

```