[官网连接](https://www.kancloud.cn/manual/thinkphp5/12616)
# 架构
URL访问采用默认的PATH_INFO方式
http://域名/index.php/index/index/add/id/10/name/egg
http://域名/入口文件/模块/控制器/方法

隐藏入口文件 public/static/.htaccess文件中

应用》n模块》模块配置+完整mvc

PATH_INFO 兼容模式
http://域名/index.php?s=/模块名/控制器名/操作名&参数键值对
http://tp5.com/index.php?s=index/user/add&id=10&name=egg
http://tp5.com/index.php?s=index/index/add/id/10/name/egg

## 命名规范
+ 命名类型
 + 匈牙利命名法： 标识中的每个单词之间用下划线分隔 user_name
    + 小匈牙利 user_name （常用作配置参数）
    + 大匈牙利 USER_NAME （常用作常量）
 + 驼峰命名法
    + 大驼峰命名 ClassName （常用作类名）
    + 小驼峰命名 className （常用作类的属性和方法）
+ 目录（匈牙利） user/user_type 
+ 类文件（驼峰）
    + 命名空间与文件真实路径完全一致 app\index\controller
    + 类名与文件名保持一致（首字母大写） User.php中只有User类
+ 其他文件（匈牙利）

+ 函数（匈牙利） get_user_type()
+ 类的方法（小驼峰） getName()
+ 类的属性（小驼峰） userType
+ 魔术方法 （双下划线+小驼峰） ___callStatic()
+ 常量 （大匈牙利） USER_NAME
+ 配置参数 （小匈牙利） user_name

+ 数据表 （小匈牙利 前缀用数据库名） tps_staff
+ 字段表 （小匈牙利 前缀用表名） stall_name

# 体系
+ 入口文件 index.php
    + 是整个web应用的起点
    + 最常用的是index.php
    + 不是唯一的，例如可为后台单独设置入口：admin.php
    + 入口文件可以通过URL重写功能将其隐藏 public/static/.htaccess文件中设置
+ 应用
    + 应用是url请求到完成的（生命周期）处理对象，由\think\App类处理（thinkphp/library/think/App.php 其中定义了很多方法共框架使用）
    + 必须在入口文件中（如index.php)调用并执行
    + 可为不同的应用创建多个入口文件。如后台入口：admin.php
    + 应用有自己独立的配置文件（config.php）和公共函数文件（common.php）
+ 模块
    + 一个应用下有多个模块，对应着应用的不同部分，如前台home，后台admin（默认index模块）
    + 每个模块都可以有完整的MVC类库，创建和管理这些类库是我们最主要的工作
    + 每个模块都可以有自己独立的配置文件（config.php）和公共函数文件（common.php）
    + 如果应用简单，可以使用单模块模式：'app_multi_module'=>false,
+ 控制器
    + 每个模块下可以有多个控制器负责相应URL请求
    + 每个控制器对应一个控制器类(class),如User.php
    + 控制器管理者模型与视图，是系统资源的调度与分配中心
    + thinkPHP5的控制器不需要继承任何基类就可以工作（如果需要使用框架中的controller类的属性或方法可以继承controller类 语法：use think\controller\    class index extends controller{……}
    + 控制器类可以包括多个操作方法，但如果你的操作方法是protected或者private类型的话，是无法直接通过URL访问到该操作的，也就是说只有public类型的操作方法才是可以通过URL访问的。
+ 操作
    + 操作对应着控制器类中的方法，是URL请求的最小单元
    + 任何的URL请求，最终都是由控制器中的操作方法来完成
    + 操作是整个应用的最终执行单元，是URL路由的核心与目标
+ 模型
    + 模型通常对应整个应用，因此模型通常在应用（application）目录下创建
    + 尽管模型主要是针对数据库进行CURD操作，但也可以不操作数据库
    + 模型通常完成实际的业务逻辑和数据封装，并返回和格式无关的数据
    + 模型返回的数据，通常是数组（array）或字符串（string）
    + 模型支持分成操作，列如将模型层分为逻辑层/服务层/事件层
+ 视图
    + 控制器调用模型返回的数据，是通过视图转换成不同格式输出的
    + 视图根据请求，调用模板引擎确定是直接输出还是模板解析后再输出
    + 视图是由大量模板文件组成，这些文件对应着不同控制器中的操作方法
    + 模板目录是可以动态设置的
    + 视图最直观的理解，就是由一系列的html文件组成

app/index/controller/index.php中的hello方法
app/index/view/index/hello.html

# tp5生命周期
入口文件》》引导文件》》注册自动加载》》注册错误和异常机制》》应用初始化》》URL访问检测》》路由检测》》分发请求》》响应输出》》应用结束

# pt5助手函数 M A I S
+ M
```php
//实例化User模型
$User = new Model('User');
//或者使用M()快捷方法实例化，和上面的方法是等效的
$User = M('User');
//执行其他的数据操作
$User->select();
```
+ A
```php
//实例化Home模块的User控制器
$User = new \Home\Controller\UserController();
//实例化Admin模块的blog控制器
$Blog = new \Admin\Controller\BlogController();

//假设当前模块是Home模块
$User = A('User');
$Blog = A('Admin/Blog');
+ I
```php
I('get.id'); // 相当于 $_GET['id']
I('get.name'); // 相当于 $_GET['name']
```
+ S

# 如果你的控制器继承了\think\Controller类的话，则无需自己实例化视图类，可以直接调用控制器基础类封装的相关视图类的方法。
方法|说明
---|----
fetch	|渲染模板输出
display	|渲染内容输出
assign	|模板变量赋值
engine	|初始化模板引擎

如果需要调用View类的其它方法，可以直接使用$this->view 对象：

## 模板
调用模板方法|对应模板位置
----|---
$view->fetch();|[模板文件目录]/当前控制器名（小写+下划线）/当前操作名（小写）.html
$view->fetch('add');|[模板文件目录]/当前控制器名（小写+下划线）/add.html
$view->fetch('user/add');|[模板文件目录]/user/add.html
$view->fetch('admin@user/add');|admin/[模板文件目录]/user/add.html

## think/controller
+ 方法
    + 页面跳转方法（trail/controller/jump.php
        + success
            $this->success('验证成功'，‘ok’)    //成功 跳到ok方法
        + error
        + redirect 
            $this->redirect('ok','siteName'=>'phpnet') //重定向到当前控制器的ok方法
            $this->redirect('http://www.php.cn',302) //重定向到外网 类型为302 （302表示临时重定向、301永久重定向）
            $this->redirect("/index/index/$phone"); //带参数跳转，需设置路由规则如  '__pattern__'  => [
                    'name'  => '\w+',
                    'id'    => '\d+',
                    'year'  => '\d{4}',
                    'month' => '\d{2}',
                    'phone' => '\d+',
                ],
                'index/index/:phone' => 'index/index/index',
    + $this->ajaxReturn(返回数据,提示信息,操作状态);
    + $this->assign('data',$data);木模板变量赋值

## think/request
[相关连接](https://blog.csdn.net/u012600104/article/details/78845325)
$request = Request::instance();
        echo '请求方法：'.$request->method() . '<br/>';
        echo '资源类型：'.$request->type() . '<br/>';
        echo '访问ip：'.$request->ip() . '<br/>';
        echo '是否为ajax请求：'.var_export($request->isAjax(), true).'<br/>';
        echo '请求参数：';
        dump($request->param());
        echo '请求参数：仅包含name';
        dump($request->only(['name']));
        echo '请求参数：排除name';
        dump($request->except(['name']));
        echo '资源类型：'.$request->type() . '<br/>';
        echo '<br/>操作：'.$request->action();
        echo '获取当前域名：'.$request->domain() . '<br/>';
        
## think/db
[相关链接](https://www.kancloud.cn/thinkphp/thinkphp5_quickstart/147283)
+ method
    + 原生查询（SQL查询） Db::execute();
        + $result = Db::execute('insert into think_data (id, name ,status) values (5, "thinkphp",1)');dump($result);
        + $result = Db::execute('update think_data set name = "framework" where id = 5 ');dump($result);
        + $result = Db::query('select * from think_data where id = 5');dump($result);
        + $result = Db::execute('delete from think_data where id = 5 ');dump($result);
    + 链式查询（查询构造器基于PDO实现） Db::table('think_data')->(……);
        + Db::table('think_data')->insert(['id' => 18, 'name' => 'thinkphp', 'status' => 1]);
        + Db::table('think_data')->where('id', 18)->update(['name' => "hello"]);
        + $list = Db::table('think_data')->field('name,email')->where('id', 18)->select();
        + Db::table('think_data')->where('id', 18)->delete();
        + 注 在数据库配置文件中设置了数据表的前缀后，table方法可以改成name方法 
           例如 Db::name('data')->insert(['id' => 18, 'name' => 'thinkphp']);
        + 注 使用系统提供的助手函数db则可以进一步简化查询代码如
            $db = db('data');$db->insert(['id' => 20, 'name' => 'thinkphp']);
        + tips：插入更新返回影响的行数>0  find 返回对象  seclect 返回数组

## think/Model
模型会自动对应数据表，模型类的命名规则是除去表前缀的数据表名称，采用驼峰法命名，并且首字母大写，例如：User  think_user   UserType  think_user_type
+ attribute
    + protected $pk = 'uid';    //设置主键，默认主键自动识别
    + protected $table = 'think_user';    // 设置当前模型对应的完整数据表名称
    + protected $autoWriteTimestamp = true;   // 开启自动写入时间戳字段 
      protected $autoWriteTimestamp = false;   // 关闭自动写入时间戳
      protected $autoWriteTimestamp = 'datetime';   // 开启自动以日期形式写入时间戳字段
    + // 定义时间戳字段名（当需要自动写入时间的字段名不是默认时需要）
     protected $createTime = 'create_at';
     protected $updateTime = 'update_at';
     // 关闭自动写入update_time字段（不需要自动写入该字段时）
     protected $updateTime = false;
    + protected $readonly = ['name','email'];  //设置只读只读字段（及不可修改）
    +   protected $type = [
            'status'    =>  'integer',
            'score'     =>  'float',
            'birthday'  =>  'datetime',
            'info'      =>  'array',
        ];  //自动转换（会在写入和读取的时候自动进行类型转换处理）
        tips: 数据库查询默认取出来的数据都是字符串类型
    +   protected $auto = [];   //自动完成
        protected $insert = ['ip','status' => 1];   // 插入时自动完成
        protected $update = ['login_ip'];    // 更新时自动完成
+ method
    + increase
        + $user = new User; 
            $user->name = 'thinkphp'; 
            $user->email = 'thinkphp@qq.com';
            $user->save();   //新增单条 
            echo $user->id;  // 获取自增ID
        + $user = new User;
            $list = [
                ['name'=>'thinkphp','email'=>'thinkphp@qq.com'],
                ['name'=>'onethink','email'=>'onethink@qq.com']
            ];
            $user->saveAll($list);  //批量新增
    + update
        + $user = new User;
            // save方法第二个参数为更新条件
            $user->save([
                'name'  => 'thinkphp',
                'email' => 'thinkphp@qq.com'
            ],['id' => 1]);
        + $user = new User;
            $list = [
                ['id'=>1, 'name'=>'thinkphp', 'email'=>'thinkphp@qq.com'],
                ['id'=>2, 'name'=>'onethink', 'email'=>'onethink@qq.com']
            ];
            $user->saveAll($list); //批量更新
    + delete
        + User::destroy(['status' => 0]);  // 删除状态为0的数据
    + query
        + $user = User::get(['name' => 'thinkphp']);  //获取单个数据
        + $list = User::all(['status'=>1]);   //获取多条数据
        + $user = User::getByName('thinkphp');    // 动态根据name字段查询用户
    + 聚合
        + User::count();
        + User::where('status','>',0)->count();
        + User::where('status',1)->avg('score');
        + User::max('score');
    + 获取器（获取器的作用是在获取数据的字段值后自动进行处理）
    + 修改器（修改器的作用是可以在数据赋值的时候自动进行转换处理）
    + 



## 配置目录
惯例配置文件 thinkphp/conf/convention.php
+ 配置项 
    + url_route_on 路由设置开启
        + app/route.php  think\route::rule('demo1','admin/index/demo1)
        + 访问www.tp5.com/demo1
    + auto_bind_module 自动绑定刀模块
    + url_controller_layer 控制目录的名称（默认controller）

+ 默认配置目录
+ 自定配置目录
+ 扩展配置目录



# phpstudy 虚拟域名设置
+ C:\Windows\System32\drivers\etc下的hosts文件最下面添加一行 127.0.0.1  www.demo.com
+ PHPstudy/apache/conf/ 打开 httpd.conf 文件，ctrl+f 搜索 httpd-vhost ,就会找到 Include conf/extra/httpd-vhosts.conf，删掉前面的注释“#”,然后再搜索 servername localhost (在前面加上#）
+ httpd.conf同级目录中的vhosts.conf文件 
添加
    <VirtualHost *:80>
    DocumentRoot "F:\phpStudy\PHPTutorial\WWW\hopes\tp5\public" //目标目录
    ServerName community.hope.com //hosts文件中添加的虚拟域名
    </VirtualHost>
    <Directory "F:\phpStudy\PHPTutorial\WWW\hopes\tp5\public"> //目标目录
        Options Indexes FollowSymLinks Includes ExecCGI
        AllowOverride All
        Order allow,deny
        Allow from all
    </Directory>
（注 PHPstudy软件界面 “其他选项菜单”=》站点域名管理 新增并保存设置生成配置文件可以达到相同的修改效果）