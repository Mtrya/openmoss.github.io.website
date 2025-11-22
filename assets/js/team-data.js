/**
 * 团队数据文件
 * 包含：当前成员 (teamData) 和 校友 (alumniData)
 * 由 data.js 和 data2.js 合并而来
 */

const teamData = {
    // 教职成员（教师）
    coreMembers: [
        {
            id: 'xipeng-qiu',
            name: {
                zh: '邱锡鹏',
                en: 'Xipeng Qiu'
            },
            title: {
                zh: '教授',
                en: 'Professor'
            },
            photo: 'assets/img/Xipeng Qiu.jpg',
            email: 'xpqiu@fudan.edu.cn',
            homepage: 'https://xpqiu.github.io/',
            scholar: 'https://scholar.google.com/citations?user=Pq4Yp_kAAAAJ'
        },
        {
            id: 'xinchi-chen',
            name: {
                zh: '陈新驰',
                en: 'Xinchi Chen'
            },
            title: {
                zh: '青年研究员',
                en: 'Professor'
            },
            photo: 'assets/img/Xinchi Chen.jpg',
            email: 'chenxinchi@fudan.edu.cn',
            homepage: 'https://dalstonchen.github.io/'
        },
        {
            id: 'jinlan-fu',
            name: {
                zh: '傅金兰',
                en: 'Jinlan Fu'
            },
            title: {
                zh: '助理教授A',
                en: 'Assistant Professor A'
            },
            photo: 'assets/img/Jinlan Fu.jpg',
            homepage: 'https://jinlanfu.github.io'
        },
        {
            id: 'tao-ji',
            name: {
                zh: '纪焘',
                en: 'Tao Ji'
            },
            title: {
                zh: '助理教授B',
                en: 'Assistant Professor B'
            },
            photo: 'assets/img/Tao Ji.jpeg',
            homepage: 'https://taoji.eth.link/'
        },
        {
            id: 'jingjing-gong',
            name: {
                zh: '龚经经',
                en: 'Jingjing Gong'
            },
            title: {
                zh: '研究助理教授',
                en: 'Research Assistant Professor'
            },
            photo: 'assets/img/Jingjing Gong.jpg',
            homepage: 'https://jjgong.com'
        },
        {
            id: 'ziwei-he',
            name: {
                zh: '何子薇',
                en: 'Ziwei He'
            },
            title: {
                zh: '研究助理教授',
                en: 'Research Assistant Professor'
            },
            photo: 'assets/img/Ziwei He.jpg',
            homepage: 'https://scholar.google.com/citations?hl=en&user=3ii0orgAAAAJ'
        },
        {
            id: 'shuang-chen',
            name: {
                zh: '陈爽',
                en: 'Shuang Chen'
            },
            title: {
                zh: '专任副研究员',
                en: 'Associate Research Fellow'
            },
            photo: 'assets/img/Shuang Chen.jpg',
            homepage: 'https://scholar.google.com/citations?user=epJpBtYAAAAJ&hl=zh-CN'
        },
        {
            id: 'yining-zheng',
            name: {
                zh: '郑逸宁',
                en: 'Yining Zheng'
            },
            title: {
                zh: '专任副研究员',
                en: 'Associate Research Fellow'
            },
            photo: 'assets/img/Yining Zheng.jpeg',
            homepage: 'https://github.com/WillQvQ'
        }
    ],

    // 博士后
    postdocs: [
        {
            id: 'chujie-ma',
            name: {
                zh: '马楚婕',
                en: 'Chujie Ma'
            },
            title: {
                zh: '博士后',
                en: 'Postdoctoral Researcher'
            },
            photo: 'assets/img/马楚婕.jpg'
        },
        {
            id: 'xin-qi',
            name: {
                zh: '齐欣',
                en: 'Xin Qi'
            },
            title: {
                zh: '博士后',
                en: 'Postdoctoral Researcher'
            },
            photo: 'assets/img/齐欣.jpg'
        }
    ],

    // 博士研究生
    phdStudents: [
        { id: 'chen-jia', name: { zh: '陈嘉', en: 'Jia Chen' }, photo: 'assets/img/陈嘉.PNG' },
        { id: 'ke-chen', name: { zh: '陈可', en: 'Ke Chen' }, photo: 'assets/img/陈可.JPEG', homepage: 'https://github.com/jingyijun' },
        { id: 'qian-chen', name: { zh: '陈千', en: 'Qian Chen' }, photo: 'assets/img/陈千.jpg', homepage: 'https://qq31415926.github.io/cq.github.io/' },
        { id: 'jijun-cheng', name: { zh: '程纪钧', en: 'Jijun Cheng' }, photo: 'assets/img/程纪钧.png' },
        { id: 'qinyuan-cheng', name: { zh: '程沁源', en: 'Qinyuan Cheng' }, photo: 'assets/img/程沁源.jpg', homepage: 'https://xiami2019.github.io/' },
        { id: 'shicheng-fang', name: { zh: '方世成', en: 'Shicheng Fang' }, photo: 'assets/img/方世成.png' },
        { id: 'senyu-fei', name: { zh: '费森俞', en: 'Senyu Fei' }, photo: 'assets/img/费森俞.JPEG' },
        { id: 'zhaoye-fei', name: { zh: '费朝烨', en: 'Zhaoye Fei' }, photo: 'assets/img/费朝烨.jpeg', homepage: 'https://ngc7292.github.io/' },
        { id: 'zhaoyang-fu', name: { zh: '付兆洋', en: 'Zhaoyang Fu' }, photo: 'assets/img/付兆洋.jpg' },
        { id: 'siyang-he', name: { zh: '何思洋', en: 'Siyang He' }, photo: 'assets/img/何思洋.jpg' },
        { id: 'xingyang-he', name: { zh: '何星阳', en: 'Xingyang He' }, photo: 'assets/img/何星阳.png' },
        { id: 'tianyu-huai', name: { zh: '怀天宇', en: 'Tianyu Huai' }, photo: 'assets/img/怀天宇.jpg', homepage: 'https://yutinh.github.io/' },
        { id: 'zezheng-huai', name: { zh: '淮泽正', en: 'Zezheng Huai' }, photo: 'assets/img/淮泽正.jpg', homepage: 'https://github.com/Huaizz-shawen' },
        { id: 'botian-jiang', name: { zh: '姜博天', en: 'Botian Jiang' }, photo: 'assets/img/姜博天.png' },
        { id: 'ruixiao-li', name: { zh: '李睿潇', en: 'Ruixiao Li' }, photo: 'assets/img/李睿潇.JPG', homepage: 'https://github.com/Li-dongyang' },
        { id: 'yukang-lin', name: { zh: '林煜康', en: 'Yukang Lin' }, photo: 'assets/img/林煜康.jpeg' },
        { id: 'yang-liu', name: { zh: '刘玚', en: 'Yang Liu' }, photo: 'assets/img/刘玚.jpg' },
        { id: 'fan-liu', name: { zh: '刘帆', en: 'Fan Liu' }, photo: 'assets/img/刘帆.jpg' },
        { id: 'zhigeng-liu', name: { zh: '刘智耿', en: 'Zhigeng Liu' }, photo: 'assets/img/刘智耿.webp' },
        { id: 'xiaoran-liu', name: { zh: '柳潇然', en: 'Xiaoran Liu' }, photo: 'assets/img/柳潇然.jpeg', homepage: 'https://github.com/lxr-tech' },
        { id: 'jiahao-lu', name: { zh: '陆嘉昊', en: 'Jiahao Lu' }, photo: 'assets/img/陆嘉昊.jpeg' },
        { id: 'luo-qi', name: { zh: '罗琪', en: 'Luo Qi' }, photo: 'assets/img/罗琪.jpg' },
        { id: 'kai-lv', name: { zh: '吕凯', en: 'Kai Lv' }, photo: 'assets/img/吕凯.png', homepage: 'https://kailv69.github.io/' },
        { id: 'pengfang-qian', name: { zh: '钱鹏方', en: 'Pengfang Qian' }, photo: 'assets/img/钱鹏方.jpg', homepage: 'https://github.com/oowsxq' },
        { id: 'yuerong-song', name: { zh: '宋悦荣', en: 'Yuerong Song' }, photo: 'assets/img/宋悦荣.jpeg' },
        { id: 'jingqi-tong', name: { zh: '仝竞奇', en: 'Jingqi Tong' }, photo: 'assets/img/仝竞奇.jpg', homepage: 'https://github.com/tongjingqi' },
        { id: 'junxuan-wang', name: { zh: '汪俊轩', en: 'Junxuan Wang' }, photo: 'assets/img/汪俊轩.jpg' },
        { id: 'pengyu-wang', name: { zh: '王鹏宇', en: 'Pengyu Wang' }, photo: 'assets/img/王鹏宇.jpg' },
        { id: 'siyin-wang', name: { zh: '王思尹', en: 'Siyin Wang' }, photo: 'assets/img/王思尹.JPG', homepage: 'https://sinwang20.github.io/' },
        { id: 'xinyuan-wang', name: { zh: '王新元', en: 'Xinyuan Wang' }, photo: 'assets/img/王新元.JPG', homepage: 'https://dirtycomputer.github.io/' },
        { id: 'jinhao-wu', name: { zh: '吴锦皓', en: 'Jinhao Wu' }, photo: 'assets/img/吴锦皓.png' },
        { id: 'guangjun-xu', name: { zh: '徐光君', en: 'Guangjun Xu' }, photo: 'assets/img/徐光君.png', homepage: 'http://www.linkedin.com/in/guangjun327' },
        { id: 'ningyu-xu', name: { zh: '徐凝雨', en: 'Ningyu Xu' }, photo: 'assets/img/徐凝雨.JPEG' },
        { id: 'chenchen-yang', name: { zh: '杨晨晨', en: 'Chenchen Yang' }, photo: 'assets/img/杨晨晨.jpg', homepage: 'https://cr-fish.github.io/' },
        { id: 'linqi-yin', name: { zh: '殷林琪', en: 'Linqi Yin' }, photo: 'assets/img/殷林琪.JPEG' },
        { id: 'zhangyue-yin', name: { zh: '印张悦', en: 'Zhangyue Yin' }, photo: 'assets/img/印张悦.jpg' },
        { id: 'jun-zhan', name: { zh: '詹俊', en: 'Jun Zhan' }, photo: 'assets/img/詹俊.JPEG', homepage: 'https://junzhan2000.github.io' },
        { id: 'haowei-zhang', name: { zh: '张浩威', en: 'Haowei Zhang' }, photo: 'assets/img/张浩威.png', homepage: 'https://haowei-freesky.github.io/' },
        { id: 'haozhe-zhang', name: { zh: '张浩哲', en: 'Haozhe Zhang' }, photo: 'assets/img/张浩哲.png' },
        { id: 'wenbo-zhang', name: { zh: '张文擘', en: 'Wenbo Zhang' }, photo: 'assets/img/张文擘.JPEG', homepage: 'https://github.com/ppolariss' },
        { id: 'yiyang-zhang', name: { zh: '张奕洋', en: 'Yiyang Zhang' }, photo: 'assets/img/张奕洋.jpg', homepage: 'https://github.com/CloudRipple' }
    ],

    // 硕士研究生
    masterStudents: [
        { id: 'hanfu-chen', name: { zh: '陈汉夫', en: 'Hanfu Chen' }, photo: 'assets/img/陈汉夫.JPEG' },
        { id: 'jingqi-chen', name: { zh: '陈敬麒', en: 'Jingqi Chen' }, photo: 'assets/img/陈敬麒.png' },
        { id: 'liwei-fan', name: { zh: '范力玮', en: 'Liwei Fan' }, photo: 'assets/img/范力玮.jpg' },
        { id: 'yufei-gao', name: { zh: '高宇菲', en: 'Yufei Gao' }, photo: 'assets/img/高宇菲.png' },
        { id: 'xuyang-ge', name: { zh: '葛煦旸', en: 'Xuyang Ge' }, photo: 'assets/img/葛煦旸.jpg' },
        { id: 'yitian-gong', name: { zh: '龚奕天', en: 'Yitian Gong' }, photo: 'assets/img/龚奕天.jpg', homepage: 'https://github.com/gyt1145028706' },
        { id: 'kexin-huang', name: { zh: '黄可欣', en: 'Kexin Huang' }, photo: 'assets/img/黄可欣.jpg', homepage: 'https://kexinhuang19.github.io/' },
        { id: 'ji-li', name: { zh: '纪力', en: 'Jili' }, photo: 'assets/img/纪力.JPEG' },
        { id: 'yaozhou-jiang', name: { zh: '蒋燿州', en: 'Yaozhou Jiang' }, photo: 'assets/img/蒋燿州 .jpg' },
        { id: 'bowen-li', name: { zh: '李博文', en: 'Bowen Li' }, photo: 'assets/img/李博文.jpg' },
        { id: 'bufan-li', name: { zh: '李不凡', en: 'Bufan Li' }, photo: 'assets/img/李不凡.jpg' },
        { id: 'yuan-li', name: { zh: '李源', en: 'Yuan Li' }, photo: 'assets/img/李源.jpg' },
        { id: 'zhiyuan-li', name: { zh: '厉致远', en: 'Zhiyuan Li' }, photo: 'assets/img/厉致远.jpg' },
        { id: 'feihong-liu', name: { zh: '刘飞鸿', en: 'Feihong Liu' }, photo: 'assets/img/刘飞鸿.jpg', homepage: 'https://openreview.net/profile?id=%7EFeihong_Liu4' },
        { id: 'xingyu-lu', name: { zh: '陆星宇', en: 'Xingyu Lu' }, photo: 'assets/img/陆星宇.jpg' },
        { id: 'wentao-shu', name: { zh: '舒文韬', en: 'Wentao Shu' }, photo: 'assets/img/舒文韬.webp' },
        { id: 'enxi-wang', name: { zh: '王恩曦', en: 'Enxi Wang' }, photo: 'assets/img/王恩曦.jpg' },
        { id: 'jin-wang', name: { zh: '王瑾', en: 'Jin Wang' }, photo: 'assets/img/王瑾.JPEG' },
        { id: 'qifeng-wu', name: { zh: '吴奇峰', en: 'Qifeng Wu' }, photo: 'assets/img/吴奇峰.jpg' },
        { id: 'zhe-xu', name: { zh: '徐哲', en: 'Zhe Xu' }, photo: 'assets/img/徐哲.jpg', homepage: 'https://phospheneser.github.io/' },
        { id: 'xiaopeng-yu', name: { zh: '余晓鹏', en: 'Xiaopeng Yu' }, photo: 'assets/img/余晓鹏.jpg' },
        { id: 'zhen-yu', name: { zh: '余镇', en: 'Zhen Yu' }, photo: 'assets/img/余镇.JPEG' },
        { id: 'fengye-yuan', name: { zh: '袁枫烨', en: 'Yuan Fengye' }, photo: 'assets/img/袁枫烨.jpg' },
        { id: 'yuqian-zhang', name: { zh: '张羽乾', en: 'Yuqian Zhang' }, photo: 'assets/img/张羽乾.JPEG' },
        { id: 'xingjian-zhao', name: { zh: '赵行健', en: 'Xingjian Zhao' }, photo: 'assets/img/赵行健.jpg', homepage: 'https://github.com/singularity-s0' },
        { id: 'yiwei-zhao', name: { zh: '赵奕伟', en: 'Yiwei Zhao' }, photo: 'assets/img/赵奕伟.jpg' },
        { id: 'jiazheng-zhou', name: { zh: '周家正', en: 'Jiazheng Zhou' }, photo: 'assets/img/周家正.JPEG' },
        { id: 'maosen-zhou', name: { zh: '周卯森', en: 'Maosen Zhou' }, photo: 'assets/img/周卯森.jpg' },
        { id: 'jie-zhu', name: { zh: '祝杰', en: 'Jie Zhu' }, photo: 'assets/img/祝杰.jpg' },
        { id: 'huaxiang-zhuang', name: { zh: '庄华翔', en: 'Huaxiang Zhuang' }, photo: 'assets/img/庄华翔.jpg', homepage: 'https://brekoji.github.io/' }
    ],

    // 本科生
    undergraduates: [
        { id: 'jikun-cai', name: { zh: '蔡纪坤', en: 'Jikun Cai' }, photo: 'assets/img/蔡纪坤.JPEG' },
        { id: 'kuangwei-chen', name: { zh: '陈匡巍', en: 'Kuangwei Chen' }, photo: 'assets/img/陈匡巍.jpg' },
        { id: 'zihao-dai', name: { zh: '戴子皓', en: 'Zihao Dai' }, photo: 'assets/img/戴子皓.jpg' },
        { id: 'tingshuo-fan', name: { zh: '范庭朔', en: 'Tingshuo Fan' }, photo: 'assets/img/范庭朔.png', homepage: 'https://survivor613.github.io/' },
        { id: 'ching-wing-kwok', name: { zh: '郭政颍', en: 'Ching Wing Kwok' }, photo: 'assets/img/郭政颍.jpg', homepage: 'https://academic.seleixi.site/' },
        { id: 'chen-hu', name: { zh: '胡宸', en: 'Hu Chen' }, photo: 'assets/img/胡宸.jpg' },
        { id: 'luozhijie-jin', name: { zh: '金罗智杰', en: 'Luozhijie Jin' }, photo: 'assets/img/金罗智杰.png' },
        { id: 'changsong-li', name: { zh: '李畅松', en: 'Changsong Li' }, photo: 'assets/img/李畅松.jpg' },
        { id: 'hangcheng-li', name: { zh: '李航成', en: 'Hangcheng Li' }, photo: 'assets/img/李航成.jpg', homepage: 'https://github.com/lkdhy' },
        { id: 'jiaxi-li', name: { zh: '李佳羲', en: 'Jiaxi Li' }, photo: 'assets/img/李佳羲.JPEG', homepage: 'https://jecci-cmd.github.io/' },
        { id: 'mingzhe-li', name: { zh: '李明哲', en: 'Mingzhe Li' }, photo: 'assets/img/李明哲.jpg', homepage: 'https://www.mubuky.com/' },
        { id: 'yinze-luo', name: { zh: '罗尹泽', en: 'Yinze Luo' }, photo: 'assets/img/罗尹泽.jpg', homepage: 'https://fudan-nlp.feishu.cn/wiki/H1GMwJjiuiN5j6kMXAGcRo13nxc?from=from_copylink' },
        { id: 'haochen-ma', name: { zh: '马颢宸', en: 'Haochen Ma' }, photo: 'assets/img/马颢宸.jpg' },
        { id: 'xiaomeng-qian', name: { zh: '钱晓萌', en: 'Xiaomeng Qian' }, photo: 'assets/img/钱晓萌.jpg', homepage: 'https://xmqian03.github.io' },
        { id: 'shenling-qiu', name: { zh: '邱深凌', en: 'Shenling Qiu' }, photo: 'assets/img/邱深凌.jpg' },
        { id: 'hengmian-shi', name: { zh: '史恒勉', en: 'Hengmian Shi' }, photo: 'assets/img/史恒勉.jpg' },
        { id: 'jinyu-tian', name: { zh: '田晋宇', en: 'Jinyu Tian' }, photo: 'assets/img/田晋宇.jpg' },
        { id: 'yihai-tian', name: { zh: '田亦海', en: 'Yihai Tian' }, photo: 'assets/img/田亦海.jpg' },
        { id: 'hongkai-wang', name: { zh: '王鸿凯', en: 'Hongkai Wang' }, photo: 'assets/img/王鸿凯.jpg' },
        { id: 'qiqi-wang', name: { zh: '王琪琦', en: 'Qiqi Wang' }, photo: 'assets/img/王琪琦.JPEG' },
        { id: 'ruiming-wang', name: { zh: '王瑞明', en: 'Ruiming Wang' }, photo: 'assets/img/王瑞明.png' },
        { id: 'wenxuan-wang', name: { zh: '王文煊', en: 'Wenxuan Wang' }, photo: 'assets/img/王文煊.JPG' },
        { id: 'yang-wang-1', name: { zh: '王扬', en: 'Yang Wang' }, photo: 'assets/img/王扬.png' },
        { id: 'yang-wang-2', name: { zh: '王洋', en: 'Yang Wang' }, photo: 'assets/img/王洋.jpg' },
        { id: 'yubang-wang', name: { zh: '王昱邦', en: 'Yubang Wang' }, photo: 'assets/img/王昱邦.jpg' },
        { id: 'huangxuan-wu', name: { zh: '吴黄璇', en: 'Huangxuan Wu' }, photo: 'assets/img/吴黄璇.jpg', homepage: 'https://github.com/OddFunction0205' },
        { id: 'jiaxing-wu', name: { zh: '吴家兴', en: 'Jiaxing Wu' }, photo: 'assets/img/吴家兴.jpg' },
        { id: 'ruixi-wu', name: { zh: '吴睿曦', en: 'Ruixi Wu' }, photo: 'assets/img/吴睿曦.jpeg' },
        { id: 'chen-yang', name: { zh: '杨晨', en: 'Chen Yang' }, photo: 'assets/img/杨晨.jpg' },
        { id: 'shudong-yang', name: { zh: '杨枢栋', en: 'Shudong Yang' }, photo: 'assets/img/杨枢栋.jpg', homepage: 'https://github.com/luppppy' },
        { id: 'huazheng-zeng', name: { zh: '曾华正', en: 'Huazheng Zeng' }, photo: 'assets/img/曾华正.jpg', homepage: 'https://huazzeng.github.io/' },
        { id: 'junpeng-zhang', name: { zh: '张俊鹏', en: 'Junpeng Zhang' }, photo: 'assets/img/张俊鹏.jpg', homepage: 'https://github.com/JunpengZZhang' },
        { id: 'chengyang-zhu', name: { zh: '朱程炀', en: 'Chengyang Zhu' }, photo: 'assets/img/朱程炀.png', homepage: 'https://github.com/Zecyel' }
    ],

    // 访问学生
    visitingStudents: [
        { id: 'hongnan-ma', name: { zh: '马红楠', en: 'Hongnan Ma' }, photo: 'assets/img/马红楠.jpg' },
        { id: 'jiaxing-miao', name: { zh: '苗嘉兴', en: 'Jiaxing Miao' }, photo: 'assets/img/苗嘉兴.jpg', homepage: 'https://scholar.google.com/citations?user=LU4PAJUAAAAJ&hl=en' },
        { id: 'yiwei-shi', name: { zh: '史一苇', en: 'Yiwei Shi' }, photo: 'assets/img/史一苇.jpg' },
        { id: 'yiran-suo', name: { zh: '锁祎然', en: 'Yiran Suo' }, photo: 'assets/img/锁祎然.png' },
        { id: 'kang-yu', name: { zh: '于康', en: 'Kang Yu' }, photo: 'assets/img/于康.jpg', homepage: 'https://kaysonyu.github.io' }
    ],

    // 校友（已毕业）
    alumni: [
        {
            id: 'alumni-001',
            name: {
                zh: '周八',
                en: 'Ba Zhou'
            },
            degree: {
                zh: '博士',
                en: 'PhD'
            },
            year: 2020, // 毕业年份
            current: {
                zh: 'MIT 助理教授',
                en: 'Assistant Professor, MIT'
            },
            photo: 'assets/img/default-avatar.svg'
        }
        // ... 添加更多校友
    ]
};;

const alumniData = {
    // 博士后校友
    postdocs: [
        { name: { zh: '陈爽', en: 'Shuang Chen' }, destination: { zh: '复旦大学专任副研究员', en: 'Associate Research Fellow, Fudan University' }, homepage: 'https://scholar.google.com/citations?user=epJpBtYAAAAJ&hl=zh-CN' }
    ],

    // 博士生校友
    phd: [
        { name: { zh: '陈新驰', en: 'Xinchi Chen' }, destination: { zh: '复旦大学青年研究员', en: 'Professor, Fudan University' }, homepage: 'https://dalstonchen.github.io/' },
        { name: { zh: '龚经经', en: 'Jingjing Gong' }, destination: { zh: '上海创智学院研究助理教授', en: 'Research Assistant Professor, SII' }, homepage: 'https://jjgong.com' },
        { name: { zh: '郭琦鹏', en: 'Qipeng Guo' }, destination: { zh: '上海人工智能实验室', en: 'Shanghai AI Laboratory' }, homepage: 'https://scholar.google.com/citations?user=k3mPGKgAAAAJ&hl=en' },
        { name: { zh: '李林阳', en: 'Linyang Li' }, destination: { zh: '上海人工智能实验室', en: 'Shanghai AI Laboratory' }, homepage: 'https://www.aminer.cn/profile/56176bb745cedb3397bf2f78' },
        { name: { zh: '李孝男', en: 'Xiaonan Li' }, destination: { zh: '海外创业公司', en: 'Overseas Startup' }, homepage: null },
        { name: { zh: '李世民', en: 'Shimin Li' }, destination: { zh: '模思智能 CEO', en: 'CEO, MOSI Intelligence' }, homepage: 'https://openreview.net/profile?id=~Shimin_Li1' },
        { name: { zh: '刘鹏飞', en: 'Pengfei Liu' }, destination: { zh: '上海交通大学副教授', en: 'Associate Professor, Shanghai Jiao Tong University' }, homepage: 'https://plms.ai/people/index.html' },
        { name: { zh: '刘向阳', en: 'Xiangyang Liu' }, destination: { zh: '日行迹', en: 'Analemma' }, homepage: 'https://scholar.google.com/citations?user=U8QD9mwAAAAJ&hl=en' },
        { name: { zh: '孙天祥', en: 'Tianxiang Sun' }, destination: { zh: '日行迹 CEO、上海创智学院助理教授', en: 'CEO of Analemma, Assistant Professor at SII' }, homepage: 'https://txsun1997.github.io/' },
        { name: { zh: '颜航', en: 'Hang Yan' }, destination: { zh: '国内创业公司', en: 'Domestic Startup' }, homepage: 'https://dl.acm.org/profile/99659996992' },
        { name: { zh: '郑逸宁', en: 'Yining Zheng' }, destination: { zh: '复旦大学专任副研究员', en: 'Associate Research Fellow, Fudan University' }, homepage: 'https://github.com/WillQvQ' },
        { name: { zh: '周云华', en: 'Yunhua Zhou' }, destination: { zh: '上海人工智能实验室', en: 'Shanghai AI Laboratory' }, homepage: null }
    ],

    // 硕士生校友
    masters: [
        { name: { zh: '安晨鑫', en: 'Chenxin An' }, destination: { zh: '香港大学博士研究生', en: 'PhD Student, The University of Hong Kong' }, homepage: 'https://chenxinan-fdu.github.io/' },
        { name: { zh: '曹零', en: 'Ling Cao' }, destination: { zh: '阿里巴巴', en: 'Alibaba' }, homepage: null },
        { name: { zh: '常成', en: 'Cheng Chang' }, destination: { zh: '模思智能', en: 'MOSI Intelligence' }, homepage: 'https://scholar.google.com/citations?user=X7oyRLIAAAAJ&hl=en' },
        { name: { zh: '陈科宇', en: 'Keyu Chen' }, destination: { zh: '宁波市奉化区发改局', en: 'Ningbo Fenghua Development and Reform Bureau' }, homepage: null },
        { name: { zh: '陈俊坤', en: 'Junkun Chen' }, destination: { zh: '微软', en: 'Microsoft' }, homepage: 'https://scholar.google.com/citations?user=cHLaJhUAAAAJ&hl=en' },
        { name: { zh: '陈怡然', en: 'Yiran Chen' }, destination: { zh: '日行迹', en: 'Analemma' }, homepage: null },
        { name: { zh: '陈云涛', en: 'Yuntao Chen' }, destination: { zh: '上海电网', en: 'Shanghai Electric Grid' }, homepage: null },
        { name: { zh: '戴宁', en: 'Ning Dai' }, destination: { zh: '俄勒冈州立大学博士研究生', en: 'PhD Student, Oregon State University' }, homepage: 'https://ndai.ai/' },
        { name: { zh: '范子越', en: 'Ziyue Fan' }, destination: { zh: '字节跳动', en: 'ByteDance' }, homepage: null },
        { name: { zh: '傅健', en: 'Jian Fu' }, destination: { zh: ' ', en: ' ' }, homepage: null },
        { name: { zh: '耿志超', en: 'Zhichao Geng' }, destination: { zh: 'AWS', en: 'AWS' }, homepage: 'https://deepai.org/profile/zhichao-geng' },
        { name: { zh: '何俊亮', en: 'Junliang He' }, destination: { zh: '字节跳动', en: 'ByteDance' }, homepage: null },
        { name: { zh: '洪嘉伟', en: 'Jiawei Hong' }, destination: { zh: '上海人工智能实验室', en: 'Shanghai AI Laboratory' }, homepage: null },
        { name: { zh: '胡先念', en: 'Xiannian Hu' }, destination: { zh: '阿里巴巴', en: 'Alibaba' }, homepage: null },
        { name: { zh: '黄超超', en: 'Chaochao Huang' }, destination: { zh: '上汽集团', en: 'SAIC Motor' }, homepage: null },
        { name: { zh: '黄璐瑶', en: 'Luyao Huang' }, destination: { zh: '拼多多', en: 'Pinduoduo' }, homepage: null },
        { name: { zh: '籍佗', en: 'Tuo Ji' }, destination: { zh: ' ', en: ' ' }, homepage: null },
        { name: { zh: '姜经翔', en: 'Jingxiang Jiang' }, destination: { zh: '华为', en: 'Huawei' }, homepage: null },
        { name: { zh: '蒋昊', en: 'Hao Jiang' }, destination: { zh: ' ', en: ' ' }, homepage: null },
        { name: { zh: '蒋子恒', en: 'Ziheng Jiang' }, destination: { zh: '字节跳动首席研究科学家', en: 'Principal Research Scientist, ByteDance' }, homepage: 'https://ziheng.org/' },
        { name: { zh: '柯震', en: 'Zhen Ke' }, destination: { zh: '小米', en: 'Xiaomi' }, homepage: null },
        { name: { zh: '李鹏', en: 'Peng Li' }, destination: { zh: ' ', en: ' ' }, homepage: null },
        { name: { zh: '梁建泽', en: 'Jianze Liang' }, destination: { zh: '微软', en: 'Microsoft' }, homepage: null },
        { name: { zh: '林泽辉', en: 'Zehui Lin' }, destination: { zh: '字节跳动', en: 'ByteDance' }, homepage: null },
        { name: { zh: '林天扬', en: 'Tianyang Lin' }, destination: { zh: '阿里巴巴', en: 'Alibaba' }, homepage: null },
        { name: { zh: '刘腾霄', en: 'Tengxiao Liu' }, destination: { zh: '加州大学圣塔芭芭拉分校博士研究生', en: 'PhD Student, UCSB' }, homepage: 'https://tengxiaoliu.github.io/' },
        { name: { zh: '刘毅韬', en: 'Yitao Liu' }, destination: { zh: 'Optiver', en: 'Optiver' }, homepage: null },
        { name: { zh: '刘枭雄', en: 'Xiaoxiong Liu' }, destination: { zh: '京东', en: 'JD.com' }, homepage: null },
        { name: { zh: '钱鹏', en: 'Peng Qian' }, destination: { zh: '哈佛大学博士后', en: 'Postdoc, Harvard University' }, homepage: 'https://www.mit.edu/~pqian/' },
        { name: { zh: '权国风', en: 'Guofeng Quan' }, destination: { zh: '阿里巴巴', en: 'Alibaba' }, homepage: null },
        { name: { zh: '任可', en: 'Ke Ren' }, destination: { zh: '字节跳动', en: 'ByteDance' }, homepage: null },
        { name: { zh: '施展', en: 'Zhan Shi' }, destination: { zh: '皇后大学博士研究生', en: 'PhD Student, Queen University' }, homepage: null },
        { name: { zh: '宋德敏', en: 'Demin Song' }, destination: { zh: '字节跳动', en: 'ByteDance' }, homepage: null },
        { name: { zh: '孙付', en: 'Fu Sun' }, destination: { zh: '阿里巴巴', en: 'Alibaba' }, homepage: null },
        { name: { zh: '孙驰', en: 'Chi Sun' }, destination: { zh: '腾讯', en: 'Tencent' }, homepage: null },
        { name: { zh: '孙瑜', en: 'Yu Sun' }, destination: { zh: '上海人工智能实验室', en: 'Shanghai AI Laboratory' }, homepage: null },
        { name: { zh: '汤琼', en: 'Qiong Tang' }, destination: { zh: '日行迹', en: 'Analemma' }, homepage: null },
        { name: { zh: '田乐', en: 'Le Tian' }, destination: { zh: '微软', en: 'Microsoft' }, homepage: null },
        { name: { zh: '王丹青', en: 'Danqing Wang' }, destination: { zh: '字节跳动', en: 'ByteDance' }, homepage: null },
        { name: { zh: '王少敬', en: 'Shaojing Wang' }, destination: { zh: '拼多多', en: 'Pinduoduo' }, homepage: null },
        { name: { zh: '王阳刚', en: 'Yanggang Wang' }, destination: { zh: '循环智能', en: 'Recurrent AI' }, homepage: null },
        { name: { zh: '吴嘉文', en: 'Jiawen Wu' }, destination: { zh: '世纪前沿资产', en: 'Century Capital' }, homepage: null },
        { name: { zh: '吴玲玲', en: 'Lingling Wu' }, destination: { zh: 'Optiver', en: 'Optiver' }, homepage: null },
        { name: { zh: '吴世宇', en: 'Shiyu Wu' }, destination: { zh: '百度', en: 'Baidu' }, homepage: null },
        { name: { zh: '徐嘉诚', en: 'Jiacheng Xu' }, destination: { zh: 'Salesforce 研究科学家', en: 'Research Scientist, Salesforce AI Research' }, homepage: 'https://jiacheng-xu.github.io/' },
        { name: { zh: '许一格', en: 'Yige Xu' }, destination: { zh: '新加坡南洋理工大学博士研究生', en: 'PhD Student, NTU Singapore' }, homepage: 'https://xuyige.github.io/' },
        { name: { zh: '杨建强', en: 'Jianqiang Yang' }, destination: { zh: '阿里巴巴', en: 'Alibaba' }, homepage: null },
        { name: { zh: '杨小珪', en: 'Xiaogui Yang' }, destination: { zh: '模思智能', en: 'MOSI Intelligence' }, homepage: null },
        { name: { zh: '杨雨晴', en: 'Yuqing Yang' }, destination: { zh: '南加州大学博士研究生', en: 'PhD Student, USC' }, homepage: 'https://ayyyq.github.io/' },
        { name: { zh: '尹留松', en: 'Liusong Yin' }, destination: { zh: '华为', en: 'Huawei' }, homepage: null },
        { name: { zh: '张栋', en: 'Dong Zhang' }, destination: { zh: '小米', en: 'Xiaomi' }, homepage: null },
        { name: { zh: '张墨执', en: 'Mozhi Zhang' }, destination: { zh: '字节跳动', en: 'ByteDance' }, homepage: null },
        { name: { zh: '张硕', en: 'Shuo Zhang' }, destination: { zh: '国内创业公司', en: 'Domestic Startup' }, homepage: null },
        { name: { zh: '张硕闻', en: 'Shuowen Zhang' }, destination: { zh: '蚂蚁集团', en: 'Ant Group' }, homepage: null },
        { name: { zh: '张啸天', en: 'Xiaotian Zhang' }, destination: { zh: '国内创业公司', en: 'Domestic Startup' }, homepage: null },
        { name: { zh: '张鑫', en: 'Xin Zhang' }, destination: { zh: '小米', en: 'Xiaomi' }, homepage: null },
        { name: { zh: '赵嘉亿', en: 'Jiayi Zhao' }, destination: { zh: '谷歌', en: 'Google' }, homepage: null },
        { name: { zh: '郑彦俊', en: 'Yanjun Zheng' }, destination: { zh: '蚂蚁集团', en: 'Ant Group' }, homepage: null },
        { name: { zh: '钟鸣', en: 'Ming Zhong' }, destination: { zh: '伊利诺伊大学厄巴纳-香槟分校博士研究生', en: 'PhD Student, UIUC' }, homepage: 'https://maszhongming.github.io/' },
        { name: { zh: '朱秦', en: 'Qin Zhu' }, destination: { zh: '阿里巴巴', en: 'Alibaba' }, homepage: null },
        { name: { zh: '竺晨曦', en: 'Chenxi Zhu' }, destination: { zh: '百度', en: 'Baidu' }, homepage: null },
        { name: { zh: '宗一', en: 'Yi Zong' }, destination: { zh: '蚂蚁集团', en: 'Ant Group' }, homepage: null }
    ],

    // 本科生校友
    undergrad: [
        { name: { zh: '曹澍扬', en: 'Shuyang Cao' }, destination: { zh: '彭博研究科学家', en: 'Research Scientist, Bloomberg' }, homepage: 'https://shuyangcao.github.io/' },
        { name: { zh: '常帅晨', en: 'Shuaichen Chang' }, destination: { zh: 'AWS 应用科学家', en: 'Applied Scientist, AWS' }, homepage: 'https://shuaichenchang.github.io/' },
        { name: { zh: '戴宁', en: 'Ning Dai' }, destination: { zh: '俄勒冈州立大学博士研究生', en: 'PhD Student, Oregon State University' }, homepage: 'https://ndai.ai/' },
        { name: { zh: '胡志峰', en: 'Zhifeng Hu' }, destination: { zh: '乾象投资', en: 'Qianxiang Investment' }, homepage: 'https://ichn.xyz' },
        { name: { zh: '裴恒志', en: 'Hengzhi Pei' }, destination: { zh: 'AWS', en: 'AWS, USA' }, homepage: null },
        { name: { zh: '苏津岳', en: 'Jinyue Su' }, destination: { zh: 'Accutar Biotechnology', en: 'Accutar Biotechnology' }, homepage: null }
    ],

    // 访问学生校友
    visiting: [
        { name: { zh: '胡明昊', en: 'Minghao Hu' }, destination: { zh: '国防科技大学', en: 'National University of Defense Technology' }, homepage: null },
        { name: { zh: '阚志刚', en: 'Zhigang Kan' }, destination: { zh: '国防科技大学', en: 'National University of Defense Technology' }, homepage: null },
        { name: { zh: '王永', en: 'Yong Wang' }, destination: { zh: '香港大学', en: 'The University of Hong Kong' }, homepage: null },
        { name: { zh: '郑人杰', en: 'Renjie Zheng' }, destination: { zh: '同济大学', en: 'Tongji University' }, homepage: null }
    ]
};;

// 导出数据（保持兼容性）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { teamData, alumniData };
}
