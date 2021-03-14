***本文档由 Rap2 (https://github.com/thx/rap2-delos) 生成***

***本项目仓库：[http://rap2.taobao.org/repository/editor?id=276416](http://rap2.taobao.org/repository/editor?id=276416) ***

***生成日期：2021-03-14 08:50:24***

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
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1893643](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1893643)
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
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1893765](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1893765)
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
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1893819](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1893819)
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
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1896735](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1896735)
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
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1896758](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1896758)
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
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1896886](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1896886)
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
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1900617](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1900617)
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
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1900930](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1900930)
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
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1901083](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1901083)
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


### 接口：编辑修改学生个人信息
* 地址：http://p373196l49.wicp.vip/studentedit
* 类型：POST
* 状态码：200
* 简介：账号（不能修改）!!!!!
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1904211](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1904211)
* 请求接口格式：

```
└─ row: Object 
   ├─ number: Number  ((账号（不能修改）【需要通过该学号到数据库里面进行索引】))
   ├─ name: String  (学生姓名)
   ├─ sex: String  (性别)
   ├─ phone: String  (电话)
   ├─ password: String  (密码)
   ├─ department: String  (系别)
   └─ major: String  (专业)

```

* 返回接口格式：

```
├─ msg: String  
└─ code: Number  

```


### 接口：企业公司修改公司信息
* 地址：http://p373196l49.wicp.vip/companyedit
* 类型：POST
* 状态码：200
* 简介：不能修改上传各类图片，用户账号无法更改/请求参数初始值应该为账号修改前本身的信息
* Rap地址：[http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1904244](http://rap2.taobao.org/repository/editor?id=276416&mod=440030&itf=1904244)
* 请求接口格式：

```
├─ UserName: String  (登录账号【不能修改！！！】（通过账号在数据库中索引）)
├─ CompanyName: String  (公司名)
├─ CompanyPerson: String  (公司法人)
├─ UserPassword: String  (登录密码)
├─ Introduce: String  (公司介绍)
├─ CompanyAddress: String  (公司地址)
├─ CompanyType: String  (公司类型)
├─ Range: String  (经营范围)
├─ RegisteredAddress: String  (注册地址)
├─ Condition: String  (经营状态)
├─ Time: String  (成立时间)
├─ Capital: String  (注册资本)
└─ Website: String  (公司网站)

```

* 返回接口格式：

```
├─ msg: String  
└─ code: Number  

```