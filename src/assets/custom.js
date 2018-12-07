﻿module.exports = {
	custom: `{客户编码}[分隔符]"~~"
// 每行格式 :
// 编码~~名称~~简码~~税号~~地址电话~~银行账号~~邮件地址~~备注~~身份证校验
00001~~浙江红苹果电子有限公司~~~~33018172759273X~~萧山义桥工业区  0571-82409216~~农行义桥支行  082101040002484~~~~~~False
00002~~浙江捷尚视觉科技有限公司~~~~33010066520485X~~杭州市西湖区天目山路398号尚坤大厦四楼南座 0571-28137016~~中国银行高新支行德迦分理处 800135541408091001~~~~~~False
00003~~浙江大华技术股份有限公司~~~~330165727215176~~杭州市滨江区滨安路1187号~~建行杭州市高新支行  330616735010027374657~~~~~~False
00004~~三洲集团有限公司~~~~91330382145533713T~~乐清市三洲科贸工业园 0577-62877766~~工商银行温州市乐清市北白象支行 1203282319020183849~~~~~~False
00005~~杭州大有科技发展有限公司~~~~330165734517420~~杭州市滨江区西兴街道庙后王路263号 0571-51232823~~建行华星支行 33001616180050001465~~~~~~False
00006~~杭州爱网科技有限公司~~~~330106728458022~~杭州市西湖区文一西路59号一层 86923765~~深圳发展银行武林支行 68611000595378501~~~~~~False
00007~~杭州华新机电工程有限公司~~~~330165722788530~~杭州市西湖区西斗门3号天堂软件园A幢11B室 88839385~~建行杭州高新支行 33001616735056036988~~~~~~False
00008~~苏州雷格特智能设备有限公司~~~~320500551208510~~苏州市吴中区东山工业园凤凰山路8号 0512-68583935~~中国银行苏州东山支行 459858194575~~~~~~False
00009~~杭州富特科技有限公司~~~~330100580258541~~拱墅区祥符镇孔家埭村160、161号1幛201室0571-89971699~~杭州联合银行上塘支行201000083557646~~~~~~False
00010~~中国移动通信集团浙江有限公司~~~~330165704200297~~浙江省杭州市环城北路288号 13905718225~~中国建设银行杭州市之江支行330619835010026336872~~~~~~False
00011~~山西省工业设备安装公司~~~~~~~~~~~~~~False
00012~~浙江硕维新能源技术有限公司~~~~91330101568779045B~~杭州市经济技术开发区20号街566号1幢 0571-86898502~~中国银行杭州庆春支行  362358327873~~~~~~False
00013~~浙江高泰昊能科技有限公司~~~~913301045773134820~~杭州市江干区九环路63号2幢C座302室 0571-85826623~~中国银行杭州钱塘支行 401358999283~~~~~~False
00014~~杭州市电动汽车服务有限公司~~~~330100691720823~~杭州市西湖区古翠路78号 0571-51232837~~中国建设银行杭州市建国路支行3300161682059006666~~~~~~False
00015~~浙江浙大网新众合轨道交通工程有限公司~~~~91330000790991629A~~杭州市滨江区网新双城大厦4幢14楼 0571-28800777~~招商银行杭州分行营业部 571904938610401~~~~~~False
00016~~杭州市电力局~~~~330000143048685~~杭州市建国中路219号 0571-51221578~~工行杭州市体育场路支行~~~~~~False
00017~~浙江亚丁科技有限公司~~~~330100778252209~~杭州市西湖区保俶北路36号海洋二所科研楼15楼0571-86693176~~杭州银行大关支行76318100216372~~~~~~False
00018~~浙江科瑞普电气有限公司~~~~33038214554659X~~乐清温州大桥工业区0577-55770766~~乐清市建行白象办33001627577056008288~~~~~~False
00019~~中航锂电（洛阳）有限公司~~~~410318694883679~~河南洛阳高新技术开发区滨河北路36号0379-65196065~~中国银行洛阳积翠路支行257203441627~~~~~~False
00020~~中铁四局集团电气化工程有限公司~~~~913403001498723174~~安徽省蚌埠市迎湖路9号 0552-3889218~~安徽蚌埠交行财院支行 343006011010123420017~~~~~~False
00021~~中铁二局第三工程有限公司~~~~510198734805828~~成都市高新区蓝天路33号  028-87669477~~建行成都铁道支行 51001880836059091858~~~~~~False
00022~~浙江群力电气有限公司~~~~330125715445732~~浙江省杭州余杭区星桥街道星桥北路165号~~浦发银行余杭支行8014292203197~~~~~~False
00023~~浙江中天装饰集团有限公司~~~~~~~~~~~~~~False
00024~~深圳市钡盛机电设备有限公司~~~~440300574782080~~深圳市南山区科发路10号维用大厦二期五楼502室0755-86008719~~中信银行深圳南山支行7441710182600075233~~~~~~False
00025~~深圳中聚电池有限公司~~~~440300559899096~~深圳市南山区海德3道天利中央商务广场A座909 0755-86271919~~中国工商银行深圳海岸城支行4000030409200115142~~~~~~False
00026~~上海奥传检测技术有限公司~~~~310112763020536~~上海市闵行区金都路4299号C幢1-727室  021-54426543~~建行上海闵行支行 31001531320050007411~~~~~~False
00027~~河南平高电气股份有限公司~~~~410411712645640~~河南省平顶山市南环东路22号~~建行平顶山分行 41001551611050203764~~~~~~False
00028~~北京北方振华机电设备有限公司~~~~110227743304371~~北京怀柔区北房镇北房村238号 010-67961869~~农商行青春路支行 1303000103020030000~~~~~~False
00029~~杭州大有物资有限公司~~~~330100679884905~~杭州市转塘街道美院南路99号1083室0571-51231613~~中国建设银行杭州建国路支行  3300161682053001050~~~~~~False
00030~~杭州市地铁集团有限责任公司~~~~91330100742902193B~~杭州市江干区德胜东路5277号0571-26316179~~工行杭州分行营业部1202021109900158186~~~~~~False
00031~~杭州市铁路投资有限公司~~~~~~~~~~~~~~False
00032~~西尼电梯（杭州）有限公司~~~~330181691725085~~萧山经济开发区建设三路40号，0571-82173037~~建行萧山新世纪广场支行 33001617087053000975~~~~~~False
00033~~许继电源有限公司~~~~411000615100294~~河南省许昌市经济技术开发区阳光大道中国许继高科技电气城8号楼 0374-3212885~~中行许昌分行 250704531294~~~~~~False
00034~~德清兴亚房地产开发有限公司~~~~330521587785846~~德清县武康镇宇恒大厦403室 0572-8371799~~杭州银行德清支行 3305094138100043164~~~~~~False
00035~~杭州力普机电有限公司~~~~913301017517173280~~杭州经济技术开发区M16-0-1 0571-28085626~~工行庆春路支行 1202020209900070190~~~~~~False
00036~~杭州杭港地铁有限公司~~~~330100717885221~~杭州经济技术开发区白杨街道科技园路2号1幢5层07-10单元 0571-87231575~~工商银行浙江省分行营业部 1202021109900688688~~~~~~False
00037~~杭州江东电力建设有限公司~~~~913301055630137377~~杭州市拱墅区康桥路69号4幢113室0571-86593928~~农行杭州艮山支行19017801040007215~~~~~~False
00038~~浙江三洲防爆电气有限公司~~~~330382751946470~~乐清市北白象三洲科贸工业园0577-62877711~~建行乐清北白象支行33001627577059222228~~~~~~False
00039~~南京冠亚电源设备有限公司~~~~320134728343671~~南京高新开发区柳洲北路22号 025-58747080~~中行高新区支行 02124038208093001~~~~~~False
00040~~国电南瑞科技股份有限公司~~~~320134726079387~~南京高新技术开发区D10幢  025-83097162~~招商银行城北支行 077981581091610001~~~~~~False
00041~~杭州顶正包材有限公司~~~~330195609168831~~下沙经济技术开发区4号路 86912339~~中行杭州经开支行 367558326740~~~~~~False
00042~~中国铁建电气节化局集团有限公司~~~~~~~~~~~~~~False
00043~~中国铁建电气化局集团有限公司~~~~110107777052619~~北京市石景山区八大处高科技园区西井路3号崇新大厦1号楼108A8房间 0571-83890093~~交通银行股份有限公司北京石景山支行110060872018010003732~~~~~~False
00044~~北京泰隆自动化设备有限公司~~~~110105600043290~~北京市丰台区南四环西路188号五区6号楼 010-63701615~~北京银行亚运村支行010903197001201050342-70~~~~~~False
00045~~杭州市城东新城建设投资有限公司~~~~33018172759273X~~杭州市东宁路9号 0571-86882920~~农行杭州钱塘新城支行 19025901040001166~~~~~~False
00046~~杭州恒瑞教学设备有限公司~~~~330100599578975~~杭州市拱墅区康平路中9号2幢四楼0571-88037777-8131~~杭州联合银行康桥支行201000096492940~~~~~~False
00047~~浙江省血液中心~~~~330100470051873~~杭州市武林路345号 0571-85167821~~浦发银行文晖支行 95140154800000148~~~~~~False
00048~~杭州北科电气设备有限公司~~~~330100077311376~~杭州市拱墅区长滨路78号2幢3楼3013室 0571-56261218~~杭州联合农村商业银行上塘支行 201000112017274~~~~~~False
00049~~浙江众合机电股份有限公司~~~~330165712562466~~杭州市滨江区江汉路1785号双城国际4号楼17层  0571-87959011~~中信银行杭州分行7331010182600160905~~~~~~False
00050~~杭州华电半山发电有限公司~~~~330100143049514~~杭州市拱康路200号 0571-85272932~~工行体育场路分理处  1202021009900003473~~~~~~False
00051~~杭州金松物产有限公司~~~~330100699822656~~杭州经济技术开发区22号大街26号2幢 0571-89971533~~中信银行杭州钱江支行7331710182600082682~~~~~~False
00052~~温州三洲电器电脑有限公司~~~~913303826093811148~~乐清市三洲科贸工业园0577-62877766~~工行乐清市柳市支行1203282209045867148~~~~~~False
00053~~杭州谷易科技有限公司~~~~330181799668035~~萧山经济技术开发区桥南区块高新六路118号 0571-22828017~~工行萧山支行 1202090119900387481~~~~~~False
00054~~上海西门子开关有限公司~~~~310112607256491~~上海市闵行经济技术开发区天宁路298号021-24084000~~中国工商银行上海江川支行1001245619005104384~~~~~~False
00055~~杭州海图电气设备有限公司~~~~330100063991673~~西湖区三墩镇振华路200号瑞鼎大厦1号楼631室0571-86438816~~杭州联合银行上塘支行201000106384287~~~~~~False
00056~~杭州思达电器设备有限公司~~~~33010273775873X~~杭州延安路126号耀江广厦西大厅5013B座 0571-86438816~~中信银行杭州分行7331010182200066435~~~~~~False
00057~~杭州佳汇机电有限公司~~~~330103704230322~~杭州市下城区华电弄1号1号楼7层东面 0571-88829920~~广发银行杭州分行营业部 66851201014957~~~~~~False
00058~~杭州华电下沙热电有限公司~~~~330100599555247~~杭州经济技术开发区五洋路288号 0571-56070805~~中国建设银行杭州之江支行 33001619827053005668~~~~~~False
00059~~浙江菲达电气工程有限公司~~~~330681750323896~~浙江省诸暨市望云路88号 0575-87216610~~中国工商银行诸暨市支行 1211024009245290193~~~~~~False
00060~~中铁二局集团有限公司~~~~510106621602899~~成都市通锦路16号 028-86443568~~建设银行成都铁道支行 51001880836059939221~~~~~~False
00061~~上海普天邮通科技股份有限公司~~~~310104607285751~~上海市宜山路700号 021-64360900~~交通银行漕河泾支行 310066632018002969707~~~~~~False
00062~~浙江省机械设备进出口有限责任公司~~~~330165142912697~~杭州市解放路111号金钱大厦 0571-87828905~~中行浙江省分行 354558326688~~~~~~False
00063~~杭州智源电子有限公司~~~~330125253913529~~杭州市西湖科技园西园八路2号银江软件园F楼 0571-88948701~~杭州联合银行科技支行 201000059975128~~~~~~False
00064~~宁波机场与物流发展集团有限公司~~~~330227844053196~~宁波市鄞州区栎社国际机场工程物业分公司供电部 0574-87427888~~建行宁波栎社机场分理处 33101984337052500023~~~~~~False
00065~~北京泰隆金睿科技发展有限公司~~~~110113700182212~~北京市顺义区赵全营镇稷山营村村委会北侧50米 010-60435377转805~~工行北京惠新支行 0200006309066028174~~~~~~False
00066~~杭州英达能源科技有限公司~~~~330102745849068~~杭州市下城区锦园29幢3单元202室 0571-56687807~~杭州银行科技支行 77818100007083~~~~~~False
00067~~杭州经济技术开发区资产经营集团有限公司~~~~330195470119057~~杭州经济技术开发区5号大街四季风情苑5幢2楼 201 202 203号房 0571-86927169~~中国银行杭州新客站支行 800143022708093001~~~~~~False
00068~~杭州浙大奔月科技有限公司~~~~330106765482486~~杭州西湖区玉古路116号浙江大学科技园求是孵化楼606号 0571-87952516~~工行杭州市浙大分理处 1202024609900021058~~~~~~False
00069~~浙江中烟工业有限责任公司~~~~91330000142916794U~~杭州市中山南路77号 0571-87273139~~工行杭州市羊坝头支行 1202020109006145976~~~~~~False
00070~~杭州兴达电器工程有限公司~~~~330125143868093~~杭州余杭临平经济开发区超峰东路2-1号 0571-86225747~~建行余杭支行  33001617486050000198~~~~~~False
00071~~杭州美伊特网络信息工程有限公司~~~~330181682924955~~萧山区萧山经济技术开发区大成名座1幢3单元2101室 0571-82905580~~中国银行杭州市萧山支行 400060751585~~~~~~False
00072~~海南电网有限责任公司海口供电局~~~~460100201245514~~海南省海口市大同路34号 0898-66595240~~工行海南省分行营业部 2201021509022105885~~~~~~False
00073~~北京斯蒂尔罗林科技发展有限公司~~~~110106769354895~~北京市丰台区南四环西路188号五区6号楼 010-63701615~~中国银行北京科技园区支行 814815532108092001~~~~~~False
00074~~浙江特拉瓦新能源科技有限公司~~~~330100557912322~~杭州市江干区九环路31-1号4幢607室0571-86894315~~浙商银行城西支行3310010310120100154996~~~~~~False
00075~~泰隆机械工程集团有限公司~~~~91110000600043290U~~北京市丰台区南四环西路188号五区6号楼010-63701615~~北京银行亚运村支行01090319700120105034270~~~~~~False
00076~~宁波万佳汉森电气有限公司~~~~330227091928372~~浙江省宁波市鄞州区首南街道日丽中路757号805室 0574-28809868~~华夏银行宁波江东支行 12956000000079486~~~~~~False
00077~~苏州得欣宜电气科技有限公司~~~~321700564346453~~苏州工业园区 0512-52196068~~农业银行苏州工业园区支行 550101048008031~~~~~~False
00078~~浙江展达科技有限公司~~~~330100568771289~~杭州市西湖区文三路259号B幢2号1301B-16 0571-88323932~~交通银行杭州杭大路支行 331066140018170092549~~~~~~False
00079~~杭州市地铁集团有限责任公司运营分公司~~~~330100560567582~~杭州市江干区德胜东路5277号 0571-26316269~~工商银行浙江省分行 1202021109900158186~~~~~~False
00080~~浙江省工业设备安装集团有限公司~~~~330165142911096~~杭州市开元路21号 0571-88806853~~中国建设银行杭州市文晖支行 33001616427053003197~~~~~~False
00081~~中铁五局集团电务工程有限责任公司~~~~43010418888138X~~湖南省长沙市岳麓区咸嘉湖西路475号 0731-88992575~~建行长沙商学院支行 43001571061050000241~~~~~~False
00082~~中铁二局集团电务工程有限公司~~~~915101006216029529~~成都市通锦路9号 028-86443076~~中国建设银行股份有限公司成都铁道支行 51001880836059123456~~~~~~False
00084~~北京泰隆金通科技发展有限公司~~~~110106076571774~~北京市丰台区南四环西路188号五区6号楼四层401 010-63701615~~交通银行北京丰台支行 110061242018010140815~~~~~~False
00085~~浙江大有实业有限公司~~~~91330000253926338N~~杭州市建国南路158号 0571-51231012~~中国建设银行杭州市宝石支行 33001616135050000122~~~~~~False
00086~~中铁建设集团有限公司~~~~11010710228709X~~北京市石景山区石景山路20号 010-51815841~~农业银行北京银河大街支行 11-030101040003048~~~~~~False
00087~~中铁隧道股份有限公司~~~~41011817292850X~~杭州市江干区艮山西路107号 0571-86855228~~浙商银行杭州城西支行 33100103101200100169551~~~~~~False
00088~~杭州世茂世盈房地产开发有限公司~~~~330100665242338~~杭州市滨江区江晖路1772号苏泊尔大厦8楼 0571-86502130~~招行杭州解放支行 571906501810101~~~~~~False
00089~~湖南长城信息金融设备有限责任公司~~~~430121796896825~~长沙经济技术开发区东3路5号 0731-84932784~~中国建设银行长沙市芙蓉支行营业部 43001530061052503653~~~~~~False
00090~~浙江诸安建设集团有限公司~~~~330681670277084~~诸暨市陶朱街道西二环路278号 0575-87115005~~中国工商银行诸暨市支行 121102400902101335~~~~~~False
00091~~中海石油宁波大榭石化有限公司~~~~91330201734245293H~~宁波大榭开发区榭东北港区 0574-56777604~~工行大榭支行 3901210019000004386~~~~~~False
00092~~廊坊英博电气有限公司~~~~131011682789108~~廊坊开发区荷花道北侧 0316-2578500~~建行廊坊开发区支行 13001705208050504666~~~~~~False
00093~~杭州德创电子有限公司~~~~913301106680203866~~杭州余杭区仓前街道海曙路28号1号楼二层东面 0571-88609180~~中国银行杭州滨江支行 403958346679~~~~~~False
00094~~杭州卡丽智能科技股份有限公司~~~~913301007544336119~~杭州市滨江区滨安路1197号7幢316室 87178311~~中国银行杭州浙大支行 355858327050~~~~~~False
00095~~浙江时空能源技术有限公司~~~~913301100970474880~~杭州市余杭区五常街道高顺路8号金牛座B座1-2层 0571-85851301~~杭州联合银行丰潭支行201000121930085~~~~~~False
00096~~中国联合网络通信有限公司丽水市分公司~~~~331100704746580~~浙江省丽水市大洋路489号   0578-2088055~~中国工商银行丽水市分行营业部1210199209201083456~~~~~~False
00097~~中地海外水务有限公司~~~~91330000557516637D~~杭州市滨江区江汉路1785号网新双城大厦4幢1901室 0571-28290678~~中国银行杭州滨江支行 390958327747~~~~~~False
00098~~宁波三维电测设备有限公司~~~~330205254083045~~宁波市江北区北海路188弄50号 0574-87577658~~农行宁波翠柏支行 39054001040000120~~~~~~False
00099~~西门子（杭州）高压开关有限公司~~~~91330100609135896C~~杭州经济技术开发区18号大街（东）128号  0571-86912185~~德意志银行（中国）有限公司上海分公司 3515632015~~~~~~False
00100~~杭州电力设备制造有限公司~~~~91330101770816903R~~杭州下沙经济技术开发区11号大街91号 0571-85371416~~建行杭州市建国支行 33001616182053000633~~~~~~False
00101~~杭州武林广场地下商城建设有限公司~~~~91330100679889933N~~杭州市下城区武林新村104号1幢124.125.126室 0571-85775393~~农行杭州浣纱支行 19005501040006993~~~~~~False
00102~~浙江城建建设集团有限公司~~~~91330000720082024J~~浙江省杭州市良渚街道逸盛路169-104室 0571-28869999~~中国建设银行杭州中山支行 33001618235053011913~~~~~~False
00103~~杭州市设备安装有限公司~~~~91330100143034742M~~杭州市拱墅区密渡桥路23号四楼、五楼 0571-85176695~~浦发武林支行 95160155100000489~~~~~~False
00104~~上海隧道工程有限公司~~~~91310104398689820Y~~上海市徐汇区宛平南路1099号 021-65419590~~建行上海第一支行 31001501200050020607~~~~~~False
00105~~杭州杭开电气有限公司~~~~91330100143108924D~~杭州市拱墅区康桥镇镇康景路18号 0571-28931001~~杭州银行保俶支行 77508100043919~~~~~~False
00106~~杭州协能科技股份有限公司~~~~913301005966120668~~杭州市西湖区古翠路80号浙江科技产业大厦801室 0571-89712803~~南京银行杭州城西小微企业专营支行07090120540001026~~~~~~False
00107~~杭州金汇房地产开发有限公司~~~~91330102552663240Q~~杭州市上城区美政路17号  0571-85861563~~工行庆春路支行1202020209900181584~~~~~~False
00108~~杭州滨江盛元海岸房地产开发有限公司~~~~91330109077306374W~~杭州萧山区湘湖湘墅花园一体化安置小区一号楼 0571-82372727~~工行萧山分行 1202090109900816218~~~~~~False
00109~~华润新鸿基房地产（杭州）有限公司~~~~91330100782358647R~~杭州市江干区四季青街道富春路701号 0571-86960099~~招商银行杭州之江支行 571905570610902~~~~~~False
00110~~中国美术学院~~~~123300004700090773~~杭州市南山路218号 87164626~~工行湖滨支行1202024409014432078~~~~~~False
00111~~中铁物资集团港澳有限公司~~~~914404005591635569~~珠海市横琴新区横琴南山嘴路138号5号楼2单元701房 0756-3800239~~中国银行横琴自贸区分行 717257744133~~~~~~False
00112~~杭州滨江商博房地产开发有限公司~~~~91330104079311708G~~杭州市庆春东路38号 0571-86986669~~建行秋涛支行 33001616627059666667~~~~~~False
00113~~宁波乐泰电力设备工程有限公司~~~~913302010582786114~~宁波高新区菁华路188号2幢291-1室  0574-88117002~~中国农业银行股份有限公司宁波高新区支行39160001040010393~~~~~~False
00114~~杭州市新能源汽车服务有限公司~~~~913301067494634458~~杭州西湖区古翠路78号 0571-51232833~~中国建设银行杭州市建国路支行 33001616127053003516~~~~~~False
00115~~浙江裕博电气科技有限公司~~~~913301085714791152~~杭州市滨江区江南大道3776号元天科技大厦B座5002室0571-87023667~~邮储银行杭州市西兴镇支行100544441350010001~~~~~~False
00116~~自动保存~~
0011601~~杭州市地铁集团有限责任公司~~~~91330100742902193B~~杭州市下城区庆春路90号 0571-86000869~~工行浙江省分行营业部本级 1202021109900041930~~~~~~False
0011602~~杭州中车车辆有限公司~~~~913301095714576452~~萧山区南阳街道经济技术开发区阳城大道西侧一层  0571-22668335~~建行杭州之江支行  33001619827053001275~~~~~~False
0011603~~杭州伯坦动力科技有限公司~~~~91330108328138783H~~杭州市西湖区教工路1号11幢201室   0571-81110432~~杭州银行股份有限公司营业部  3301040160002757725~~~~~~False
0011604~~中天建设集团浙江安装工程有限公司~~~~91330000727190589U~~杭州市拱墅区南北商务港大厦2幢701室 0571-28807696~~杭州银行拱宸桥支行78308100147553~~~~~~False
0011605~~湖南创一机电工程技术有限公司~~~~91430204060113672T~~株洲市石峰区建设北路86号响石花园3栋0731-28338168~~中国农业银行株洲高新技术开发区支行18112901040014478~~~~~~False
0011606~~浙江省机关事务管理局行政处~~~~330000101007561~~~~工行曙光路支行1202024509008810000~~~~~~False
0011607~~宁波万佳汉森电气有限公司~~~~91330212091928372J~~浙江省宁波市鄞州区首南街道日丽中路757号805室 0574-87808286~~华夏银行宁波江东支行 12956000000079486~~~~~~False
0011608~~北京斯蒂尔罗林科技发展有限公司~~~~91110106769354895F~~北京市丰台区南四环西路188号五区6号楼 010-63701615~~中国银行北京科技园区支行 814815532108092001~~~~~~False
0011609~~杭州运河集团投资发展有限公司~~~~91330100676777151R~~杭州机场路117号 0571-87217321~~工行杭州湖墅支行1202020609900082771~~~~~~False
0011610~~中海石油宁波大榭石化有限公司~~~~330206734245293~~浙江省宁波大榭开发区环岛北路188号 0574-86762066~~工行大榭办 3901210019000004386~~~~~~False
0011611~~浙江泰富石油化工有限公司~~~~913309006639394000~~~~~~~~~~False
0011612~~杭州江东电力建设有限公司~~~~330100563013737~~杭州市拱墅区康桥路69号4幢113室0571-86593928~~农行杭州艮山支行19017801040007215~~~~~~False
0011613~~浙江国大集团有限责任公司~~~~91330000704203033K~~杭州市体育场路333号 0571-85156666~~工行羊坝头支行 1202020109006142197~~~~~~False
0011614~~乐清市白象模具城有限公司~~~~91330382556156959D~~乐清市北白象镇坂塘工业区（乐清市爱玛服装有限公司）0577-62877766~~中国工商银行股份有限公司乐清支行柳市支行1203282209045874596~~~~~~False
00117~~株洲中车时代电气股份有限公司~~~~914300007808508659~~株洲市石峰区时代路 0731-28493461~~工行田心支行 1903020509022360548~~~~~~False
00118~~浙江力夫机电制造有限公司~~~~91330382720093372R~~乐清市乐成镇经济开发区 0577-27822222~~浙江省乐清市建行营业部 33001627535050009082~~~~~~False
00119~~许昌许继德理施尔电气有限公司~~~~914110007822231954~~国家（许昌）电力电子系统工业园阳光大道  0374-3219235~~中国建设银行许继支行 41001551818050201031~~~~~~False
00120~~杭州城北电气承装公司~~~~91330104143261136F~~杭州市江干区机场路248号1幢 0571-85047768~~农行杭州机场路支行 19015301040008372~~~~~~False
00121~~河南博源电力设备股份有限公司~~~~91410225559601413N~~兰考县产业集聚区航海路与迎宾路交叉口西南侧 0371-22737097~~中国工商银行兰考支行  1703021019048021235~~~~~~False
00122~~浙江上曼电气科技有限公司~~~~91331024557509189F~~浙江省仙居县永安工业集聚区春晖中路20号 0576-89386517~~中国银行股份有限公司仙居支行 00000364958335898~~~~~~False
00123~~温州市方洋房地产开发有限公司~~~~91330382731511269H~~乐清市三洲科贸工业园 0577-62877833~~中国工商银行股份有限公司乐清支行北白象支行 1203282319020201911~~~~~~False
00124~~株洲变流技术国家工程研究中心有限公司~~~~91430200712130057P~~株洲市石峰区田心北门 0731-28494099~~工行株洲市时代支行 1903020509024961203~~~~~~False
00125~~浙江中纵资产管理有限公司~~~~91330100MA27WE8C9E~~新城时代广场3幢2712/2713 87789733~~建行杭州城中支行 33050161652700000024~~~~~~False
00126~~浙江中纵能源有限公司~~~~91330104MA27Y4214J~~凯旋路195号2幢二层209室 87789733~~工商银行杭州景芳支行 1202009709900032104~~~~~~False
00127~~浙江天齐影视文化传媒有限公司~~~~91330104MA27WUF84A~~凯旋路195号2幢二层205室 87789733~~工商银行杭州城站支行  1202027609900104790~~~~~~False
00128~~浙江省建设投资集团股份有限公司~~~~91330000142912793U~~杭州市文三路20号 0571-88265673~~建行杭州文晖支行 33001616435050006702~~~~~~False
00129~~浙江多尔曼科技有限公司~~~~91330103557536902U~~杭州市下城区新华坊45幢-6号203室 0571-86997955~~中国银行杭州市钱塘支行 376666956194~~~~~~False
00130~~苏州西电产品销售有限公司杭州分公司~~~~91330100682902393K~~杭州市拱墅区祥园路99号运河广告产业园2号楼806 0571-85887600~~汇丰银行（中国）有限公司杭州分行 635052186011~~~~~~False
00131~~上海奥广贸易有限公司~~~~310228679314339~~上海市浦东新区川沙路4298号D1-1 021-34712505~~上海农村商业银行七宝支行 32443908010086106~~~~~~False
00132~~浙江浩然置业有限公司~~~~91330100670635355C~~杭州市江干区秋涛北路76号1040室 0571-87234859~~交通银行杭州和平支行331065910018010057944~~~~~~False
00133~~福州天宇电气股份有限公司~~~~91350100798359919L~~福州生物制药机电产业园区新药创制中心1#楼24层01室（闽侯县南屿镇） 0591-38262335~~中国建设银行股份有限公司福建省分行 35001002406052512632~~~~~~False
00134~~杭州欣美成套电器制造有限公司~~~~913301096093032202~~萧山区萧山经济技术开发区桥南区块鸿达路183号0571-82831937~~建设银行萧山支行营业部33001617088059000958~~~~~~False
00135~~杭州杭开电气科技有限公司~~~~91330100MA27YG583L~~杭州市拱墅区康桥康景路18号7幢 0571-28931022~~杭州银行保俶支行3301040160005389203~~~~~~False
00136~~杭州伯坦科技工程有限公司~~~~91330106311250621D~~杭州市西湖区西斗门路9号3幢3116室 0571-81110432~~浦发银行杭州分行营业部 95200154800006062~~~~~~False
00137~~宁波悍马能源设备有限公司~~~~91330283058260219D~~宁波市奉化经济开发区尚桥科技工业园区 白云路200号 0574-87900983~~宁波建设银行江北支行营业部 33101983736050512602~~~~~~False
00138~~浙江百灵电力建设有限公司~~~~91330108MA28M16Q1Q~~杭州市滨江区江陵路1780号2幢206室0571-87187305~~杭州银行复兴之行 3301040160006851219~~~~~~False
00139~~宏伟电气集团有限公司~~~~913303821455557289~~浙江省乐清市柳市镇长虹工业区长荣路25号0577-62751177~~中国工商银行乐清支行柳市支行1203282209045645433~~~~~~False
00140~~杭州滨力电力器材有限公司~~~~913301087708334205~~杭州市滨江区长河街道滨兴小区一区块一楼39号 0571-86628876~~杭州银行滨江支行78708100073787~~~~~~False
00141~~中铁建电气化局集团南方工程有限公司~~~~91420100691870856Q~~武汉市东湖开发区佳园路17号 027-51129315~~民生银行武汉光谷支行0511014130001429~~~~~~False
00142~~杭州启杭置业有限公司~~~~913301020567406739~~杭州市上城区复兴路437号226室~~杭州银行闸口支行3301040160000851728~~~~~~False
00143~~杭州凯优电力设备有限公司~~~~913301043112504026~~杭州市江干区新城时代广场3幢2705室 0571-87014131~~杭州联合银行九堡支行201000129286381~~~~~~False
00144~~上海上硕电气有限公司~~~~913101135820717056~~上海市宝山区金石路1688号Z区 021-54862769~~农行上海南桥支行 03803900040233513~~~~~~False
00145~~中铁电气化局集团第一工程有限公司~~~~91110106101298723K~~北京市丰台区南四环西路138号七区10-11号楼 010-51859281~~中国建设银行北京铁道专业支行 11001013900056002141~~~~~~False
00146~~浙江宏伟电网科技股份有限公司~~~~91331100554042720Q~~丽水市水阁工业区南明路799号 0578-2118600~~建行丽水开发区支行 33001693500053011966~~~~~~False
00147~~杭州西尼卡轨道交通设备有限公司~~~~913301017284580220~~杭州经济技术开发区20号大街566号2幢1层-2 0571-86898508~~建行浙江营业部 33001613535053013179~~~~~~False
00148~~杭州烽正制冷科技有限公司~~~~91330106MA27WUPP7D~~杭州市西湖区三墩镇西园三路8号3幢六层西 0571-86979851~~工商银行杭州城西支行1202205809900008513~~~~~~False
00149~~瑞立集团瑞安汽车零部件有限公司~~~~9133038175906785XW~~瑞安市经济开发区毓蒙路1169号0577-65609557~~建设银行温州瑞安支行33001626135053002232~~~~~~False
00150~~中国能源建设集团浙江省电力设计院有限公司~~~~91330000470080252L~~杭州市古翠路68号 0571-51105162~~工行浙江省分行营业部本级业务部1202021119900995858~~~~~~False
00151~~浙江锦绣天成置业有限公司~~~~91330000066917540P~~杭州市拱墅区莫干山路841弄23号2幢211室0571-86986669~~中国民生银行股份有限公司杭州分行600114103~~~~~~False
00152~~杭州世纪互联信息技术有限公司~~~~91330100577313562R~~杭州经济技术开发区出口加工区标准厂房区7幢、9幢0571-88916508~~招商银行股份有限公司杭州钱塘支行57190731441100023~~~~~~False
00153~~浙江硕维轨道交通装备有限公司~~~~91330101MA28X1LE9F~~浙江省杭州经济技术开发区白杨街道20号大街566号2幢1层-4 0571-86898548~~浙商银行杭州分行营业部 3310010010120100725209~~~~~~False
00154~~宁波市北仑富斯达进出口有限公司~~~~91330206775609292D~~北仑小港立信路15号1幢1号三楼0574-87900982~~交通银行鄞中支行332006283018010001296~~~~~~False
00155~~浙江泰富石油化工有限公司~~~~913309006639394817~~定海区马岙北部港区 0580-2047669~~农行舟山市分行19-499901040010727~~~~~~False
00156~~无锡隆玛科技股份有限公司~~~~913202007378177870~~无锡新区旺庄工业园三区二期1号标准厂房0510-85347588~~江苏银行无锡新区支行807010189100798432~~~~~~False
00157~~中海沥青（营口）有限责任公司~~~~91210881670496631Y~~辽宁省营口市仙人岛能源化工区0417-6682677~~中国银行营口经济技术开发区支行310356320661~~~~~~False
00158~~中国电信股份有限公司金华分公司~~~~91330700747709173L~~金华市西市街155号-15305790509~~金华市工行铁岭头支行1208013009021015348~~~~~~False
00159~~中铁上海工程局集团第二工程有限公司~~~~91310106570756395W~~上海市静安区江场西路299弄22号9层021-66315078~~中国建设银行股份有限公司上海第五支行31001505400050017995~~~~~~False
00160~~杭州市公安局~~~~1133010000249100XY~~杭州市华光路35号0571-87280232~~中信银行杭州分行7331010182600179309~~~~~~False
00161~~中铁二十五局集团第六工程有限公司~~~~914502007322252646~~广西柳州市红岩路二区75号0772-3924719~~中国建设银行柳州铁道支行45001623752050502549~~~~~~False
00162~~中铁上海工程局集团第二工程有公司~~~~913101065707563965W~~上海市静安区江场西路299弄22号9层02166315078~~中国建设银行股份有限公司上海第五支行310015054000500187995~~~~~~False
00163~~浙江盾安自控科技有限公司~~~~9133068105957034XH~~浙江省诸暨市店囗镇解放路689号0575-89003519~~建设银行诸暨店囗支行33001656344053008161~~~~~~False
00164~~上海滨安房地产开发有限公司~~~~91310113MA1GK2411T~~上海市宝山区锦秋路48号G271 0571-86989077~~中国银行上海市祁连山路支行452070195493~~~~~~False
00165~~宁波市永能电力产业投资有限公司电力工程安装分公司~~~~91330212MA281F6293~~宁波市鄞州区潘火街道王家弄村0574-51093022~~中国银行宁波东钱湖支行374070341076~~~~~~False
00166~~杭州信达地产有限公司~~~~91330102MA27X1KK0Y~~上城区秋涛路178号5楼319室0571-86998307~~中国农业银业杭州西湖支行营业部19000101040024602~~~~~~False
00167~~杭州科立控制技术有限公司~~~~91330106MA28T41W5C~~浙江省杭州市西湖区三墩镇西园一路8号3幢6层A楼0571-86026676~~中信银行杭州城西支行8110801013301159260~~~~~~False
00168~~中铁物资集团西南有限公司~~~~91510100201961238F~~成都市金牛区一环路北一段113号028-87667011~~中国建设银行成都市沙湾支行51001885136050665905~~~~~~False
00169~~杭州火杉科技有限公司~~~~91330109MA2AYFP3XQ~~浙江省杭州市萧山区瓜沥镇永联村友谊路1117-2号纳斯科创园A幢308-15   0571-89902368~~上海浦东发展银行萧山支行95070078801800000298~~~~~~False
00170~~浙江北辰电务科技有限公司~~~~91330104765480317X~~杭州市江干区机场路248号0571-86451722~~农行杭州机场路支行19015301040011822~~~~~~False
00171~~卓尚服饰(杭州)有限公司~~~~913301007882903056~~杭州经济技术开发区下沙街道长空路1号0571-88137538~~中国民生银行股份有限公司杭州下沙支行0717014180000068~~~~~~False
00172~~杭州丰安电力建设有限公司~~~~91330103255432067G~~杭州市朝晖路182号 0571-85803516~~杭州银行春晖支行75608100023812~~~~~~False
00173~~杭州电力设备制造有限公司萧山欣美成套电气制造分公司~~~~91330109MA2B00CK0Y~~浙江省杭州市萧山区经济技术开发区鸿达路183号 0571-82831937~~建行萧山支行33050161702700000706~~~~~~False
00174~~杭州杭港地铁五号线有限公司~~~~91330100MA28XNB273~~浙江省杭州市余杭区五常街道文一西路998号1幢803室 0571-81399832~~中国工商银行杭州分行1202021109900888016~~~~~~False
00175~~杭州铁联电气有限公司~~~~91330102MA27X1528N~~~~~~~~~~False
00176~~浙江科维节能技术股份有限公司~~~~9133010076546363XH~~杭州市西湖区文二路文欣大厦708室0571-88163028~~杭州银行科技支行77818100017675~~~~~~False`
}