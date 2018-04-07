$(function() {
  var languageMapping = {
    'en': {
      '倒空杯子': 'Emptying The Cup',
      '走在漫漫長路': 'Walking The Long Road',
      '正確的自我認知': 'Accurate Self-Assessment',
      '終身學習': 'Perpetual Learning',
      '安排自我課程': 'Construct Your Curriculum',
      '不同的道路': 'A Different Road',
      '成為菜鳥': 'Be the Worst',
      '拋棄式玩具': 'Breakable Toys',
      '具體技能': 'Concrete Skills',
      '正視你的無知': 'Confront Your Ignorance',
      '工藝先於藝術': 'Craft over Art',
      '建立回饋迴路': 'Create Feedback Loops',
      '深入探索': 'Dig Deeper',
      '量身繪製地圖': 'Draw Your Own Map',
      '擴展你的頻寬': 'Expand Your Bandwidth',
      '顯露你的無知': 'Expost Your Ignorance',
      '熟悉使用工具': 'Familiar Tools',
      '尋找個人導師': 'Find Mentors',
      '志趣相同的夥伴': 'Kindred Spirits',
      '自失敗中學習': 'Learn How You Fail',
      '培養你的熱情': 'Nurture Your Passion',
      '練習練習再練習': 'Practice, Practice, Practice',
      '持續閱讀': 'Read Constantly',
      '閱讀清單': 'Reading List',
      '記錄個人所學': 'Record What You Learn',
      '邊工作邊反省': 'Reflect as You Work',
      '退回舒適區': 'Retreat into Competence',
      '密切交往': 'Rubbing Elbows',
      '分享個人所學': 'Share What You Learn',
      '堅守初衷': 'Stay in the Trenches',
      '研讀經典': 'Study the Classics',
      '持續的動力': 'Sustainable Motivations',
      '打掃地板': 'Sweep the Floor',
      '深水區': 'The Deep End',
      '漫漫長路': 'The Long Road',
      '繫上白帶': 'The White Belt',
      '釋放你的熱情': 'Unlease Your Enthusiasm',
      '使用原始碼': 'Use the Source',
      '使用你的頭銜': 'Use Your Title',
      '你的第一個語言': 'Your First Language'
    },
    'ch': {
      '倒空杯子': '倒空杯子',
      '走在漫漫長路': '走在漫漫長路',
      '正確的自我認知': '正確的自我認知',
      '終身學習': '終身學習',
      '安排自我課程': '安排自我課程',
      '不同的道路': '不同的道路',
      '成為菜鳥': '成為菜鳥',
      '拋棄式玩具': '拋棄式玩具',
      '具體技能': '具體技能',
      '正視你的無知': '正視你的無知',
      '工藝先於藝術': '工藝先於藝術',
      '建立回饋迴路': '建立回饋迴路',
      '深入探索': '深入探索',
      '量身繪製地圖': '量身繪製地圖',
      '擴展你的頻寬': '擴展你的頻寬',
      '顯露你的無知': '顯露你的無知',
      '熟悉使用工具': '熟悉使用工具',
      '尋找個人導師': '尋找個人導師',
      '志趣相同的夥伴': '志趣相同的夥伴',
      '自失敗中學習': '自失敗中學習',
      '培養你的熱情': '培養你的熱情',
      '練習練習再練習': '練習練習再練習',
      '持續閱讀': '持續閱讀',
      '閱讀清單': '閱讀清單',
      '記錄個人所學': '記錄個人所學',
      '邊工作邊反省': '邊工作邊反省',
      '退回舒適區': '退回舒適區',
      '密切交往': '密切交往',
      '分享個人所學': '分享個人所學',
      '堅守初衷': '堅守初衷',
      '研讀經典': '研讀經典',
      '持續的動力': '持續的動力',
      '打掃地板': '打掃地板',
      '深水區': '深水區',
      '漫漫長路': '漫漫長路',
      '繫上白帶': '繫上白帶',
      '釋放你的熱情': '釋放你的熱情',
      '使用原始碼': '使用原始碼',
      '使用你的頭銜': '使用你的頭銜',
      '你的第一個語言': '你的第一個語言'
    }
  };

  var DARK_COLOR = 'rgba(200,200,200,0.5)';
  var language = 'en';
  var siteTitle = $(document.getElementById('title'));
  var patternSelectedValue;
  var patternSelect = $(document.getElementById('pattern-select'));
  patternSelect.selectpicker();
  patternSelect.on('changed.bs.select', function (e) {
    patternSelectedValue = Number($('#pattern-select option:selected').val());
    resetDefaultNodesStyle();

    if (patternSelectedValue !== -1) {
      checkToDarkenGroupsNotInvolved(); 
    }
  });
  var languageSelect = $(document.getElementById('language-select'));
  languageSelect.selectpicker();
  languageSelect.on('changed.bs.select', function(e) {
    var selectedValue = $('#language-select option:selected').val();

    language = selectedValue;
    siteTitle.html(language === 'en' ? 'Apprenticeship Patterns' : '學徒模式');

    drawNetwork();
  });
  var patternGroups;
  var patternNodes;
  var nodesColorMapping;
  var patternEdges;
  var nodes;
  var edges;
  var container;
  var data;
  var options;
  var network;

  drawNetwork();

  function drawNetwork() {
    patternGroups = [
      {
        id: 0,
        name: language === 'en' ? languageMapping['en']['倒空杯子'] : languageMapping['ch']['倒空杯子'],
        relations: [
          { from: 30, to: 20 },
          { from: 30, to: 2 },
          { from: 30, to: 16 },
          { from: 3, to: 34 },
          { from: 34, to: 7 },
          { from: 34, to: 32 },
          { from: 34, to: 29 },
          { from: 34, to: 12 },
          { from: 34, to: 2 },
          { from: 31, to: 15 },
          { from: 31, to: 10 },
          { from: 10, to: 4 },
          { from: 4, to: 10 },
          { from: 21, to: 29 },
          { from: 21, to: 13 },
          { from: 21, to: 4 },
          { from: 21, to: 10 },
          { from: 4, to: 2 },
          { from: 4, to: 13 },
          { from: 28, to: 12 },
          { from: 28, to: 6 },
          { from: 28, to: 13 },
        ]
      },
      {
        id: 1,
        name: language === 'en' ? languageMapping['en']['走在漫漫長路'] : languageMapping['ch']['走在漫漫長路'],
        relations: [
          { from: 24, to: 26 },
          { from: 24, to: 29 },
          { from: 24, to: 8 },
          { from: 24, to: 33 },
          { from: 24, to: 15 },
          { from: 8, to: 9 },
          { from: 8, to: 12 },
          { from: 8, to: 13 },
          { from: 8, to: 29 },
          { from: 8, to: 26 },
          { from: 0, to: 29 },
          { from: 0, to: 8 },
          { from: 26, to: 29 },
          { from: 26, to: 15 },
          { from: 29, to: 0 },
          { from: 29, to: 8 },
          { from: 5, to: 29 },
          { from: 15, to: 8 },
          { from: 15, to: 29 },
          { from: 15, to: 13 },
          { from: 15, to: 25 },
          { from: 33, to: 8 },
          { from: 33, to: 13 },        
        ]
      },
      {
        id: 2,
        name: language === 'en' ? languageMapping['en']['正確的自我認知'] : languageMapping['ch']['正確的自我認知'],
        relations: [
          { from: 1, to: 2 },
          { from: 1, to: 6 },
          { from: 1, to: 28 },
          { from: 1, to: 20 },
          { from: 1, to: 24 },
          { from: 1, to: 31 },
          { from: 1, to: 27 },
          { from: 1, to: 22 },
          { from: 1, to: 15 },
          { from: 1, to: 28 },
          { from: 27, to: 31 },
          { from: 22, to: 19 },
          { from: 22, to: 13 },
          { from: 13, to: 29 },
          { from: 13, to: 12 },
          { from: 13, to: 15 },
          { from: 12, to: 28 },
          { from: 12, to: 29 },        
        ]
      },
      { 
        id: 3,
        name: language === 'en' ? languageMapping['en']['終身學習'] : languageMapping['ch']['終身學習'],
        relations: [
          { from: 6, to: 20 },
          { from: 6, to: 30 },
          { from: 2, to: 1 },
          { from: 2, to: 19 },
          { from: 2, to: 30 },
          { from: 2, to: 4 },
          { from: 19, to: 23 },
          { from: 19, to: 2 },
          { from: 19, to: 13 },
          { from: 19, to: 17 },
          { from: 17, to: 19 },
          { from: 13, to: 23 },
          { from: 23, to: 27 },
          { from: 23, to: 13 },
          { from: 23, to: 19 },
          { from: 23, to: 1 },
          { from: 32, to: 16 },
          { from: 16, to: 3 },
          { from: 16, to: 2 },
          { from: 14, to: 8 },
          { from: 8, to: 9 },
          { from: 12 ,to: 9 },
        ]
      },
      {
        id: 4,
        name: language === 'en' ? languageMapping['en']['安排自我課程'] : languageMapping['ch']['安排自我課程'],
        relations: [
          { from: 25, to: 10 },
          { from: 25, to: 29 },
          { from: 25, to: 17 },
          { from: 25, to: 20 },
          { from: 25, to: 18 },
          { from: 17, to: 29 },
          { from: 17, to: 31 },
          { from: 17, to: 13 },
          { from: 17, to: 18 },
          { from: 17, to: 34 },
          { from: 17, to: 12 },
          { from: 18, to: 13 },
          { from: 18, to: 23 },
          { from: 18, to: 34 },
          { from: 18, to: 12 },
          { from: 7, to: 1 },
          { from: 7, to: 27 },
          { from: 11, to: 2 }, 
        ]
      }
    ];
    patternNodes = [
      { id: 0, label: language === 'en' ? languageMapping['en']['不同的道路'] : languageMapping['ch']['不同的道路'], group: generateGroupsForPattern(0) },
      { id: 1, label: language === 'en' ? languageMapping['en']['成為菜鳥'] : languageMapping['ch']['成為菜鳥'], group: generateGroupsForPattern(1) },
      { id: 2, label: language === 'en' ? languageMapping['en']['拋棄式玩具'] : languageMapping['ch']['拋棄式玩具'], group: generateGroupsForPattern(2) },
      { id: 3, label: language === 'en' ? languageMapping['en']['具體技能'] : languageMapping['ch']['具體技能'], group: generateGroupsForPattern(3) },
      { id: 4, label: language === 'en' ? languageMapping['en']['正視你的無知'] : languageMapping['ch']['正視你的無知'], group: generateGroupsForPattern(4) },
      { id: 5, label: language === 'en' ? languageMapping['en']['工藝先於藝術'] : languageMapping['ch']['工藝先於藝術'], group: generateGroupsForPattern(5) },
      { id: 6, label: language === 'en' ? languageMapping['en']['建立回饋迴路'] : languageMapping['ch']['建立回饋迴路'], group: generateGroupsForPattern(6) },
      { id: 7, label: language === 'en' ? languageMapping['en']['深入探索'] : languageMapping['ch']['深入探索'], group: generateGroupsForPattern(7) },
      { id: 8, label: language === 'en' ? languageMapping['en']['量身繪製地圖'] : languageMapping['ch']['量身繪製地圖'], group: generateGroupsForPattern(8) },
      { id: 9, label: language === 'en' ? languageMapping['en']['擴展你的頻寬'] : languageMapping['ch']['擴展你的頻寬'], group: generateGroupsForPattern(9) },
      { id: 10, label: language === 'en' ? languageMapping['en']['顯露你的無知'] : languageMapping['ch']['顯露你的無知'], group: generateGroupsForPattern(10) },
      { id: 11, label: language === 'en' ? languageMapping['en']['熟悉使用工具'] : languageMapping['ch']['熟悉使用工具'], group: generateGroupsForPattern(11) },
      { id: 12, label: language === 'en' ? languageMapping['en']['尋找個人導師'] : languageMapping['ch']['尋找個人導師'], group: generateGroupsForPattern(12) },
      { id: 13, label: language === 'en' ? languageMapping['en']['志趣相同的夥伴'] : languageMapping['ch']['志趣相同的夥伴'], group: generateGroupsForPattern(13) },
      { id: 14, label: language === 'en' ? languageMapping['en']['自失敗中學習'] : languageMapping['ch']['自失敗中學習'], group: generateGroupsForPattern(14) },
      { id: 15, label: language === 'en' ? languageMapping['en']['培養你的熱情'] : languageMapping['ch']['培養你的熱情'], group: generateGroupsForPattern(15) },
      { id: 16, label: language === 'en' ? languageMapping['en']['練習練習再練習'] : languageMapping['ch']['練習練習再練習'], group: generateGroupsForPattern(16) },
      { id: 17, label: language === 'en' ? languageMapping['en']['持續閱讀'] : languageMapping['ch']['持續閱讀'], group: generateGroupsForPattern(17) },
      { id: 18, label: language === 'en' ? languageMapping['en']['閱讀清單'] : languageMapping['ch']['閱讀清單'], group: generateGroupsForPattern(18) },
      { id: 19, label: language === 'en' ? languageMapping['en']['記錄個人所學'] : languageMapping['ch']['記錄個人所學'], group: generateGroupsForPattern(19) },
      { id: 20, label: language === 'en' ? languageMapping['en']['邊工作邊反省'] : languageMapping['ch']['邊工作邊反省'], group: generateGroupsForPattern(20) },
      { id: 21, label: language === 'en' ? languageMapping['en']['退回舒適區'] : languageMapping['ch']['退回舒適區'], group: generateGroupsForPattern(21) },
      { id: 22, label: language === 'en' ? languageMapping['en']['密切交往'] : languageMapping['ch']['密切交往'], group: generateGroupsForPattern(22) },
      { id: 23, label: language === 'en' ? languageMapping['en']['分享個人所學'] : languageMapping['ch']['分享個人所學'], group: generateGroupsForPattern(23) },
      { id: 24, label: language === 'en' ? languageMapping['en']['堅守初衷'] : languageMapping['ch']['堅守初衷'], group: generateGroupsForPattern(24) },
      { id: 25, label: language === 'en' ? languageMapping['en']['研讀經典'] : languageMapping['ch']['研讀經典'], group: generateGroupsForPattern(25) },
      { id: 26, label: language === 'en' ? languageMapping['en']['持續的動力'] : languageMapping['ch']['持續的動力'], group: generateGroupsForPattern(26) },
      { id: 27, label: language === 'en' ? languageMapping['en']['打掃地板'] : languageMapping['ch']['打掃地板'], group: generateGroupsForPattern(27) },
      { id: 28, label: language === 'en' ? languageMapping['en']['深水區'] : languageMapping['ch']['深水區'], group: generateGroupsForPattern(28) },
      { id: 29, label: language === 'en' ? languageMapping['en']['漫漫長路'] : languageMapping['ch']['漫漫長路'], group: generateGroupsForPattern(29) },
      { id: 30, label: language === 'en' ? languageMapping['en']['繫上白帶'] : languageMapping['ch']['繫上白帶'], group: generateGroupsForPattern(30) },
      { id: 31, label: language === 'en' ? languageMapping['en']['釋放你的熱情'] : languageMapping['ch']['釋放你的熱情'], group: generateGroupsForPattern(31) },
      { id: 32, label: language === 'en' ? languageMapping['en']['使用原始碼'] : languageMapping['ch']['使用原始碼'], group: generateGroupsForPattern(32) },
      { id: 33, label: language === 'en' ? languageMapping['en']['使用你的頭銜'] : languageMapping['ch']['使用你的頭銜'], group: generateGroupsForPattern(33) },
      { id: 34, label: language === 'en' ? languageMapping['en']['你的第一個語言'] : languageMapping['ch']['你的第一個語言'], group: generateGroupsForPattern(34) }
    ];
    nodesColorMapping = {};
    patternEdges = [];
    
    patternSelect.contents().remove();
    if (patternSelectedValue !== -1)
      patternSelect.append($("<option></option>").val(-1).html(language === 'en' ? 'All' : '選取全部'));
    else
      patternSelect.append($("<option selected></option>").val(-1).html(language === 'en' ? 'All' : '選取全部'));

    patternGroups.forEach(function(pattern, index) {
      patternEdges = generateNetworkEdges(patternEdges, pattern.relations);
      buildPatternSelect(pattern, index);
    });
    patternSelect.selectpicker('refresh');
    
    nodes = new vis.DataSet(patternNodes);
    edges = new vis.DataSet(patternEdges);
    container = document.getElementById('network');
    data = {
      nodes: nodes,
      edges: edges
    };
    options = {
      edges: {
        arrows: {
          to: { enabled: true, scaleFactor: 1, type: 'arrow' }
        }
      },
      autoResize: true,
      height: '100%',
      width: '100%',
      nodes: {
          font: {
              size: 12,
              face: 'Tahoma'
          }
      },
      layout: {
          randomSeed: 388597,
          improvedLayout: true,
          hierarchical: {
              enabled: false
          }
      },
      physics: true,
      interaction: {
          hover: true,
          hideEdgesOnDrag: true
      }
    };
  
    network = new vis.Network(container, data, options);
  
    network.once('afterDrawing', function () {
      generateNodesColorMapping();
  
      checkToDarkenGroupsNotInvolved();

      network.on('click', highlishtGroupsforSelectedNode);
    });    
  }

  function generateGroupsForPattern(patternId) {
    var groupString = "";
    var i, j;
  
    for (i = 0; i < patternGroups.length; i++) {
      for (j = 0; j < patternGroups[i].relations.length; j++) {
        if (patternGroups[i].relations[j].from === patternId || patternGroups[i].relations[j].to === patternId) {
          groupString += (patternGroups[i].name + '|');
          break;
        }
      }
    }
  
    return groupString;
  }

  function generateNetworkEdges(patternEdges, relations) {
    patternEdges = patternEdges.concat(relations);
    return patternEdges;
  }

  function buildPatternSelect(pattern, index) {
    if (patternSelectedValue === index)
      patternSelect.append($("<option selected></option>").val(pattern.id).html(pattern.name));
    else
      patternSelect.append($("<option></option>").val(pattern.id).html(pattern.name));
  }
  
  function highlishtGroupsforSelectedNode(params) {
    // if something is selected:
    if (params.nodes.length > 0) {
      var groups = generateGroupsForPattern(params.nodes[0]);
      resetDefaultNodesStyle();
      darkenGroupsNotInvolved(groups);
    }
  }

  function resetDefaultNodesStyle() {
    var allNodes = nodes.get({returnType: 'object'});
    var node;

    for (node in allNodes) {
      allNodes[node].color = nodesColorMapping[allNodes[node].id];
    }

    nodes.update(allNodes);
  }

  function generateNodesColorMapping() {
    var node;

    for (node in nodes) {
      nodesColorMapping[nodes[node].id] = nodes[node].color;
    }
  }

  function checkToDarkenGroupsNotInvolved() {
    var group;
    for (group in patternGroups) {
      if (patternGroups[group].id === patternSelectedValue) {
        darkenGroupsNotInvolved(patternGroups[group].name);
        break;
      }
    }   
  }

  function darkenGroupsNotInvolved(groups) {
    var i, j;
    var nodesTobeDarkened = new Set();
    var allNodes = nodes.get({returnType: 'object'});
    var node;
  
    for (i = 0; i < patternGroups.length; i++) {
      if (groups.indexOf(patternGroups[i].name) !== -1) {
        for (j = 0; j < patternGroups[i].relations.length; j++) {
          if (!nodesTobeDarkened.has(patternGroups[i].relations[j].from)) {
            nodesTobeDarkened.add(patternGroups[i].relations[j].from);
          }
          if (!nodesTobeDarkened.has(patternGroups[i].relations[j].to)) {
            nodesTobeDarkened.add(patternGroups[i].relations[j].to);
          }
        }
      }
    }

    for (node in allNodes) {
      if (!nodesTobeDarkened.has(allNodes[node].id))
        allNodes[node].color = DARK_COLOR;
    }

    nodes.update(allNodes);
  }
});