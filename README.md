***本文档由 Rap2 (https://github.com/thx/rap2-delos) 生成***

***本项目仓库：[http://rap2.taobao.org/repository/editor?id=276416](http://rap2.taobao.org/repository/editor?id=276416) ***

***生成日期：2021-03-23 10:06:36***

# 仓库：校园招聘平台
## 模块：公司信息模块
### 接口：公司企业数据
* 地址：http://p373196l49.wicp.vip/company
* 类型：POST
* 状态码：200
* 简介：接口描述
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


### 接口：编辑修改学生个人信息
* 地址：http://p373196l49.wicp.vip/studentedit
* 类型：POST
* 状态码：200
* 简介：账号（不能修改）!!!!!
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


### 接口：传入学生登录账号返回该账号的信息
* 地址：http://p373196l49.wicp.vip/studentoneselect
* 类型：POST
* 状态码：200
* 简介：无
* 请求接口格式：

```
└─ number: String  

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


### 接口：通过职位中的公司名 来查询该公司的信息
* 地址：http://p373196l49.wicp.vip/positioncompanyselect
* 类型：POST
* 状态码：200
* 简介：无
* 请求接口格式：

```
└─ CompanyName: String  (该职位的公司名)

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
├─ Website: String  
└─ CompanyToken: Null  

```


### 接口：公司企业添加招聘职位
* 地址：http://p373196l49.wicp.vip/CompanyAddPosition
* 类型：POST
* 状态码：200
* 简介：如果公司名不为登录账号所登录的公司名则可能code:-1,msg:'请输入账号所对应的公司名！'
* 请求接口格式：

```
├─ UserName: String  (公司登录账号)
├─ TitlePosition: String  (添加职位信息中的职位名)
├─ CompanyName: String  (添加职位信息中的（登录账号的）公司名)
├─ Degree: String  (添加职位信息中的学历要求)
├─ Salary: String  (添加职位信息中的薪资)
├─ Welfare: String  (添加职位信息中的福利)
├─ Technology: String  (添加职位信息中的技术)
├─ Duty: String  (添加职位信息中的工作职责)
├─ Region: String  (添加职位信息中的区域)
└─ Number: String  (添加职位信息中的招聘人数)

```

* 返回接口格式：

```
├─ code: Number  
└─ msg: String  

```


### 接口：所登录的公司企业查看所通过审核的招聘职位
* 地址：http://p373196l49.wicp.vip/CompanyGetPosition
* 类型：POST
* 状态码：200
* 简介：无
* 请求接口格式：

```
└─ UserName: String  (公司所登录账号)

```

* 返回接口格式：

```
└─ __root__: Array 
   ├─ id: Number  
   ├─ TitlePosition: Array : Array  
   ├─ CompanyName: String  
   ├─ Degree: String  
   ├─ Salary: Array : Array  
   ├─ Welfare: Array : Array  
   ├─ Technology: Array : Array  
   ├─ Duty: Array : Array  
   ├─ Region: Array : Array  
   ├─ Number: Array : Array  
   └─ state: String  

```


### 接口：公司修改职位信息
* 地址：http://p373196l49.wicp.vip/CompanyEditPosition
* 类型：POST
* 状态码：200
* 简介：修改过后需要再次让管理员审核||公司名不要改 但参数要传
* 请求接口格式：

```
├─ id: String  (要修改职位的id)
├─ TitlePosition: String  (修改后的职位名)
├─ CompanyName: String  (公司名（不要改！但要传过来）)
├─ Degree: String  (修改后的学历信息)
├─ Salary: String  (修改后的薪资信息)
├─ Welfare: String  (修改后的福利信息)
├─ Technology: String  (修改后的技术信息)
├─ Duty: String  (修改后的职责信息)
├─ Region: String  (修改后的区域信息)
└─ Number: String  (修改后的所要招聘的人数)

```

* 返回接口格式：

```
├─ code: Number  
└─ msg: String  

```