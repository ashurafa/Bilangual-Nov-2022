


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Grade 10 Unit 2 598

var Listen =function(){
	
// Odd = Engligh question, next Even = Arabic answer;
// random is even for arabic answer;

// Three items to change: 1) Function name on the first line, variable Words (number of rows in the excel file) and the the data base. Both are noted by //========================================= 

var player = GetPlayer();

//=========================================
var Words = 598 ; 
//=========================================



var arr = [];
while(arr.length < 8)
{
    var r = Math.floor(Math.random()*Words+1)*2;
    if(arr.indexOf(r) === -1) arr.push(r);
}


var NumA=  arr[1];
var NumA1= arr[2];
var NumA2= arr[3];
var NumA3= arr[4];
var NumA4= arr[5];



var Words= [
"Free Answer for You",

//=========================================


"يلمس","touch",
"ايضا","also",
"بعيد","away",
"الى الخلف","back",
"أكياس","bags",
"قاعدة","base",
"الأفضل","best",
"صناديق","bins",
"بالخط العريض","bold",
"حذاء طويل","boot",
"على حد سواء","both",
"البق","bugs",
"مصباح","bulb",
"علب","cans",
"رعاية","care",
"البرد","cold",
"بارد","cool",
"كلفة","cost",
"يوم","day",
"عزيزي","Dear",
"يفعل","does",
"أسفل","down",
"بيض","eggs",
"حتى","even",
"أي وقت مضى","ever",
"حقيقة","fact",
"يشعر","feel",
"يملأ","fill",
"تجد","find",
"الوقود","fuel",
"هدية مجانية","gift",
"نمت","grew",
"جريد","grid",
"تنمو","grow",
"نصف","Half",
"كف","hand",
"الصعب","hard",
"يكره","hate",
"يضرب","hits",
"أمل","hope",
"الحار!","hot!",
"فقط","just",
"احتفظ","keep",
"طيب القلب","kind",
"قلة","lack",
"عاجِز","lame",
"معشوقة","lass",
"اليسار","left",
"نظرة","look",
"خسارة","loss",
"يجتمع","meet",
"عقل _ يمانع","mind",
"الوضع","mode",
"عظم","most",
"يتحرك","move",
"كثير","much",
"قرب","near",
"بحاجة إلى","need",
"الإخبارية","news",
"اسم","noun",
"زوج","Pair",
"خطة","plan",
"لعب","play",
"يضع","puts",
"استقال","quit",
"اختبار","quiz",
"قرأ","read",
"حقا","real",
"يعتمد","rely",
"أرز","Rice",
"سقف","roof",
"رمل","sand",
"بحجم","size",
"مشروب غازي","soda",
"فرز","sort",
"مثل","such",
"بالتأكيد","sure",
"خزان","tank",
"أقول","tell",
"نص","text",
"من","than",
"محاولة","try",
"منعطف أو دور","turn",
"يكتب","type",
"وحدة","Unit",
"الفعل","verb",
"جداً","very",
"رأي","view",
"انتظر","wait",
"يريد","want",
"طرق","ways",
"يرتدي","wear",
"ريح","Wind",
"يوافق على","agree",
"تجنب","avoid",
"مدرك","aware",
"أساسي","basic",
"يبدأ","Begin",
"كون","being",
"ضربات","blows",
"كتب","books",
"مربعات","boxes",
"احضر","bring",
"بنى","brown",
"مصابيح","bulbs",
"جدول","chart",
"تشاك","chuck",
"صف دراسي","class",
"ينظف","clean",
"التكاليف","costs",
"المحاصيل","crops",
"فستان","dress",
"الارض","earth",
"التمتع","enjoy",
"مقال","essay",
"إضافي","extra",
"حقائق","facts",
"يشعر","feels",
"أقدام","feet",
"نماذج","forms",
"وجدت","found",
"مضحك","funny",
"ألعاب","games",
"زجاج","glass",
"الماعز","goats",
"ذاهب","going",
"رائعة","great",
"لون أخضر","green",
"نابعة","grown",
"خمن","guess",
"صارِم","harsh",
"عصير","juice",
"معروف","known",
"كبير","large",
"يتعلم","learn",
"غادر","leave",
"محلي","local",
"مباراة","Match",
"يذوب","melts",
"فلز","metal",
"قوالب","molds",
"ليل","night",
"الأسماء","nouns",
"عرض","offer",
"غالباً","often",
"آخر","other",
"وقفة","pause",
"قطعة","piece",
"مصنع","plant",
"نقطة","point",
"قوة","power",
"مطبعة","print",
"سريع","quick",
"الى حد كبير","quite",
"إعادة استخدام","reuse",
"حقا","right",
"ينقذ","saves",
"مشهد","scene",
"يبدو","seems",
"الظل","shade",
"قصيرة","short",
"الجانبين","sides",
"شمسي","solar",
"الفضاء","space",
"أنفق","spend",
"انتصاب","stand",
"بداية","start",
"خطوات","steps",
"الشمس","sun",
"سمة","suppy",
"يأخذ","take",
"يأخذ","takes",
"أسنان","teeth",
"يرمي","throw",
"مؤقت","timer",
"قمامة، يدمر، يهدم","trash",
"حقيقة","truth",
"حتى","until",
"على","upon",
"استخدام","using",
"أفعال","verbs",
"المخلفات","waste",
"الأعشاب","weeds",
"آبار","wells",
"ويندي","Wendy",
"أين","Where",
"في حين","while",
"أسوأ","worst",
"التمكن من","access",
"يعترف","admits",
"نصيحة","advise",
"تقريبيا","almost",
"دائماً","always",
"مقدار","amount",
"مناشدة","appeal",
"جانب","aspect",
"كيس","bagful",
"أصبح","become",
"شفرات","blades",
"زجاجة","bottle",
"فترة راحة","break",
"زبدة","butter",
"شراء","buying",
"اتصل","called",
"اللوحة القماشية","canvas",
"كربون","carbon",
"يتغيرون","change",
"جبنه","cheese",
"خيار","choice",
"يختار","choose",
"دائرة","Circle",
"أقرب","closer",
"خلق","create",
"يكرر","cullet",
"قرر","decide",
"حدد","Define",
"تصميم","Design",
"رغبة","desire",
"أثناء","during",
"تأثير","effect",
"مجهود","effort",
"طاقة","energy",
"يتمتع","enjoys",
"كافي","enough",
"عذر","excuse",
"تماما","fairly",
"مملوء","filled",
"الطيران","Flying",
"ننسى","forget",
"الفاكهة","fruits",
"مستقبل","Future",
"حديقة","garden",
"جيروند","gerund",
"أرض","ground",
"مذنب","guilty",
"العادات","habits",
"مشاحنة","hassle",
"نأخذ","having",
"معلق","hooked",
"هجين","hybrid",
"تأثير","impact",
"اعتزم","intend",
"أضواء","lights",
"مرتبط","linked",
"سائل","liquid",
"تدبير","manage",
"سوق","market",
"متوسط","medium",
"خاصة","mostly",
"طبيعة سجية","nature",
"يلاحظ","Notice",
"هدف","object",
"لوحات","panels",
"صب","poured",
"تفضل","prefer",
"الأسعار","prices",
"عام","public",
"نشأ","raised",
"خفض","reduce",
"اعادة تعبئه","refill",
"نتيجة","result",
"ثانيا","second",
"بدت","seemed",
"شديدة","severe",
"مشترك","shared",
"طفيف","slight",
"مصدر","source",
"المتاجر","stores",
"قوي","strong",
"إمداد","supply",
"النظام","system",
"لقب","title",
"تحولت","turned",
"مطلوب","wanted",
"داخل","within",
"أجراءات","actions",
"مسموح","allowed",
"تحليل","analyze",
"إجابات","answers",
"محاولة","Attempt",
"معدل","average",
"يصبح","becomes",
"يصدق","believe",
"ما بين","between",
"زجاجات","bottles",
"درجة مئوية","Celsius",
"تأكيد","certain",
"التغييرات","changes",
"صهريج","cistern",
"شروط","clauses",
"مناخ","climate",
"ملابس","clothes",
"يجمع","collect",
"قارن","Compare",
"الاهتمام","concern",
"تستهلك","consume",
"طبخ","cooking",
"تبريد","cooling",
"صحيح","correct",
"بلد","country",
"يخلق","creates",
"سحق","Crushed",
"عقد، عشر سنوات","decade",
"مقرر","decided",
"أعمق","deepest",
"تناقش","discuss",
"يتضمن","entails",
"بالضبط","exactly",
"توقع","expect",
"التعبير","express",
"فشل","failing",
"المزارعون","farmers",
"تحقيق","fulfill",
"بالإضافة إلى ذلك","further",
"قمامة","garbage",
"جيرون","gerun",
"الجيروند","gerunds",
"الحصول على","getting",
"قواعد","Grammar",
"ممنوح","granted",
"كثيرا","greatly",
"النمو","growing",
"ضار","harmful",
"إيذاء","harming",
"التدفئة","heating",
"يتصور","imagine",
"دفعة","impulse",
"في حين أن","instead",
"قتل","killing",
"يقلل","lessens",
"متطابق","matched",
"المعنى","meaning",
"مليون","million",
"صباح","morning",
"المناديل","napkins",
"الأمم","nations",
"طبيعي","natural",
"بشكل جميل","nicely",
"بديهي","obvious",
"على الشبكة","on-grid",
"رأي","opinion",
"عضوي","organic",
"انقطاع","outages",
"شريك","partner",
"الممر","passage",
"سلبي","passive",
"نسبه مئويه","percent",
"في احسن الاحوال","perfect",
"عبارات","phrases",
"صورة","picture",
"بلاستيك","plastic",
"نقاط","points",
"الحالي","Present",
"معالجة","process",
"ينتج","produce",
"يعد","promise",
"تزود","Provide",
"غاية","purpose",
"مقوي","raising",
"واقع","reality",
"أسباب","reasons",
"تذكر","recalls",
"إعادة التدوير","recycle",
"يقلل","reduces",
"ذات صلة","related",
"الاعتماد","relying",
"يحل محل","replace",
"احترام","respect",
"إعادة استخدام","reusing",
"المكافآت","rewards",
"اعادة كتابة","Rewrite",
"ادارة","running",
"التسجيل","SCORING",
"الخدمات","service",
"ضبط","setting",
"الاستحمام","showers",
"شخصا ما","someone",
"خاص","special",
"بدأت","started",
"قصص","stories",
"موضوعات","subject",
"يقترح","suggest",
"افترض","suppose",
"الأنظمة","systems",
"يفكر","thought",
"تحول","turning",
"خدمة","utility",
"في الحقيقة","actually",
"إضافة","addition",
"الاتفاق","agreeing",
"اى شئ","anything",
"تجنب","avoiding",
"فوائد","benefits",
"اقواس","brackets",
"جلب","bringing",
"تنظيف بالفرشاة","brushing",
"مبنى","Building",
"اعمال","business",
"الدجاج","chickens",
"الأطفال","children",
"ملابس","clothing",
"مجموع","combined",
"مكتمل","complete",
"الحاسوب","computer",
"حفظ","conserve",
"انصح","Consider",
"استمر","continue",
"خلق","creating",
"قرار","decision",
"ازالة","disposal",
"الشرب","drinking",
"ضخم","enormous",
"تماما","entirely",
"تقييم","evaluate",
"منشأة","facility",
"يتبع","followed",
"التجميد","freezing",
"مزاح","kidding",
"مكب النفايات","landfill",
"التعلم","learning",
"الكماليات","luxuries",
"مواد","material",
"المعاني","meanings",
"شمالي","northern",
"لاحظ","noticing",
"خارج الشبكة","off-grid",
"ترتيب","ordering",
"يفوق","outweigh",
"معبئ","packaged",
"الصبر","patience",
"إيجابي","positive",
"المستطاع","possible",
"ممارسة","practice",
"أنتجت","produced",
"منتجات","products",
"ضمائر","pronouns",
"سؤال","question",
"أدرك","realized",
"إعادة تدويرها","recycled",
"يعكس","reflects",
"علاقة","relation",
"نسبيا","relative",
"تذكر","remember",
"قابل لإعادة الاستخدام","reusable",
"منطقي","sensible",
"جملة او حكم على","sentence",
"التسوق","shopping",
"المحلول","solution",
"تكلم","Speaking",
"محدد","specific",
"زودت","supplied",
"لوازم","supplies",
"رمي","throwing",
"معاً","together",
"التوربينات","turbines",
"أواني","utensils",
"الري","watering",
"كلما كان","whenever",
"أغلفة","wrappers",
"جذبت","attracted",
"تلقائي","automatic",
"متوفرة","available",
"وعي","awareness",
"حفل شواء","barbecue",
"البطاريات","batteries",
"البنايات","Buildings",
"من المؤكد","certainly",
"تحدي","Challenge",
"مواد كيميائية","chemicals",
"تم جمعها","collected",
"ملتزم","committed",
"المعنية","concerned",
"يحفظ","conserves",
"مستهلك","consumer",
"وعاء","container",
"تتحلل","decompose",
"مخلص","dedicated",
"اعتمادا","depending",
"المتقدمة","developed",
"صعبة","difficult",
"مباشرة","directly",
"الى ابعد حد","extremely",
"الأمور المالية","financial",
"الحدائق","Gardening",
"عموما","generally",
"مولد كهرباء","generator",
"البقالة","groceries",
"مهم","important",
"يزيد","increases",
"نمط الحياة","lifestyle",
"المواد","materials",
"من الضروري","necessary",
"هدف","objective",
"التغليف","packaging",
"فقرة","paragraph",
"دائم","PERMANENT",
"التلوث","pollution",
"الممارسات","practices",
"قدم","presented",
"إنتاج","producing",
"أسئلة","questions",
"مياه الأمطار","rainwater",
"نوصي","recommend",
"إعادة التدوير","recycling",
"قابل للتجديد","renewable",
"استبدال","replacing",
"مصادر","resources",
"استجابات","responses",
"لعب الأدوار","Role-play",
"تضحية","sacrifice",
"جمل","sentences",
"فصل","separated",
"الآلاف","thousands",
"تسطير","underline",
"خدمات","utilities",
"الخضروات","vegetable",
"طواحين الهواء","windmills",
"جمع","accumulate",
"أنشطة","activities",
"ملفت للانتباه","attractive",
"زملاء الصف","classmates",
"متصل","connected",
"الحاويات","containers",
"شجاعة","courageous",
"بالتااكيد","definitely",
"تعريف","definition",
"محزن","depressing",
"قاموس","dictionary",
"للاستعمال لمرة واحدة","disposable",
"نجاعة","efficiency",
"في كل مكان","everywhere",
"مرافق","facilities",
"بأمانة","faithfully",
"غير كافٍ","inadequate",
"فرد","individual",
"صيغة المصدر","infinitive",
"ذو معنى","meaningful",
"الصحف","newspapers",
"بدون تفكير","no-brainer",
"مبيدات حشرية","pesticides",
"قابلة لإعادة التدوير","recyclable",
"تضحيات","sacrifices",
"مفاجأة","surprising",
"منظم الحراره","thermostat",
"على مدار","throughout",
"تفهم","understand",
"غير متوقع","unexpected",
"خضروات","vegetables",
"مفردات","Vocabulary",
"تراكم","accumulated",
"لبديل","alternative",
"ضوء الشموع","candlelight",
"التحدي","challenging",
"مريح","comfortable",
"الشرط","Conditional",
"مكيف","conditioner",
"استهلاك","consumption",
"فرق!","difference!",
"فرق","difference",
"كهرباء","electricity",
"بيئة","environment",
"فلوري","fluorescent",
"النحوية","grammatical",
"لا يعتمد","independent",
"اللانهائيون","infinitives",
"معلومة","information",
"إنطباع","perspective",
"مسؤول","responsible",
"اقتراحات","suggestions",
"سوبر ماركت","supermarket",
"درجة الحرارة","temperature",
"غير ضروري","unnecessary",
"بدائل","alternatives",
"وسائل الراحة","conveniences",
"محادثة","Conversation",
"منظر رائع","cool-looking",
"صعوبات","difficulties",
"التوقعات","expectations",
"تفسيرات","explanations",
"غير مريح","inconvenient",
"الصانع","manufacturer",
"حي","neighborhood",
"قابلة للشحن","rechargeable",
"استيعاب","Comprehension",
"الاعتبار","consideration",
"إزالة الغابات","deforestation",
"البيئة","environmental",
"متحيز","prepositional",
"النطق","Pronunciation",
"استبيان","questionnaire",
"الاعتماد على الذات","self-reliance",
"سلبيات","disadvantages",
"وسائل النقل","transportation",
"غير متحمس","unenthusiastic",
"تهانينا","Congratulations",
"بيئيا","environmentally",
"الاكتفاء الذاتي","self-sufficient",
"الاقتران","conjunctions",


//=========================================

];

// Code to decide if the word in the quetion is Arabic or English. 
// Question word is English. All answer words arein Arabic.

var WordA = Words[NumA-1];
var WordQ = Words[NumA];

var WordA1 = Words[NumA1-1];
var WordQ1 = Words[NumA1];

var WordA2 = Words[NumA2-1];
var WordQ2 = Words[NumA2];

var WordA3 = Words[NumA3-1];
var WordQ3 = Words[NumA3];

var WordA4 = Words[NumA4-1];
var WordQ4 = Words[NumA4];



// Setting values to SL

player.SetVar("NumA",NumA);
player.SetVar("NumA1",NumA1);
player.SetVar("NumA2",NumA2);
player.SetVar("NumA3",NumA3);
player.SetVar("NumA4",NumA4);

player.SetVar("WordQ",WordQ);
player.SetVar("WordQ1",WordQ1);
player.SetVar("WordQ2",WordQ2);
player.SetVar("WordQ3",WordQ3);
player.SetVar("WordQ4",WordQ4);


player.SetVar("WordA",WordA);
player.SetVar("WordA1",WordA1);
player.SetVar("WordA2",WordA2);
player.SetVar("WordA3",WordA3);
player.SetVar("WordA4",WordA4);

			
}


// Code to say the English word in the Question
var Say =function(){
// var MyText = "What is the meaning of?" + WordQ ;	 

var player = GetPlayer();
var WordQ = player.GetVar("WordQ");

var MyText = WordQ ;	 

		
let utterance = new SpeechSynthesisUtterance(MyText);
 speechSynthesis.speak(utterance);	
 }