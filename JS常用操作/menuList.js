var menu_list = [{
    id: '1',
    menu_name: '设置',
    menu_url: 'setting',
    parentId: 0
}, {
    id: '1-1',
    menu_name: '权限设置',
    menu_url: 'setting.permission',
    parentId: '1'
}, {
    id: '1-1-1',
    menu_name: '用户管理列表',
    menu_url: 'setting.permission.user_list',
    parentId: '1-1'
}, {
    id: '1-1-2',
    menu_name: '用户管理新增',
    menu_url: 'setting.permission.user_add',
    parentId: '1-1'
}, {
    id: '1-1-3',
    menu_name: '角色管理列表',
    menu_url: 'setting.permission.role_list',
    parentId: '1-1'
}, {
    id: '1-1-4',
    menu_name: '角色管理新增',
    menu_url: 'setting.permission.role_add',
    parentId: '1-1'
},{
    id: '1-1-1-1',
    menu_name: '权限管理',
    menu_url: 'setting.permission.role_add',
    parentId: '1-1-1'
}, {
    id: '1-2',
    menu_name: '菜单设置',
    menu_url: 'setting.menu',
    parentId: '1'
}, {
    id: '1-2-1',
    menu_name: '菜单列表',
    menu_url: 'setting.menu.menu_list',
    parentId: '1-2'
}, {
    id: '1-2-2',
    menu_name: '菜单添加',
    menu_url: 'setting.menu.menu_add',
    parentId: '1-2'
}, {
    id: '2',
    menu_name: '订单',
    menu_url: 'order',
    parentId: 0
}, {
    id: '2-1',
    menu_name: '报单审核',
    menu_url: 'order.orderreview',
    parentId: '2'
}, {
    id: '2-2',
    menu_name: '退款管理',
    menu_url: 'order.refundmanagement',
    parentId: '2'
}, {
    id: '2-3',
    menu_name: '实物订单',
    menu_url: 'order.realorder',
    parentId: '2'
}, {
    id: '2-1-1',
    menu_name: '全部报单',
    menu_url: 'order.orderreview.all',
    parentId: '2-1'
}, {
    id: '2-2-1',
    menu_name: '所有记录',
    menu_url: 'order.refundmanagement.all',
    parentId: '2-2'
}, {
    id: '2-2-2',
    menu_name: '待处理',
    menu_url: 'order.refundmanagement.wait',
    parentId: '2-2'
}, {
    id: '2-2-3',
    menu_name: '退款原因',
    menu_url: 'order.refundmanagement.result',
    parentId: '2-2'
}, {
    id: '2-3-1',
    menu_name: '实物订单管理',
    menu_url: 'order.realorder.list',
    parentId: '2-3'
}, {
    id: '3',
    menu_name: '商品',
    menu_url: 'commodity',
    parentId: 0
}, {
    id: '3-1',
    menu_name: '分类管理',
    menu_url: 'commodity.classifieldmanagement',
    parentId: '3'
}, {
    id: '3-1-1',
    menu_name: '管理',
    menu_url: 'commodity.classifieldmanagement.management',
    parentId: '3-1'
}, {
    id: '3-1-2',
    menu_name: '编辑或新增',
    menu_url: 'commodity.classifieldmanagement.edit',
    parentId: '3-1'
}, {
    id: '3-2',
    menu_name: '品牌管理',
    menu_url: 'commodity.brandmanagement',
    parentId: '3'
}, {
    id: '3-2-1',
    menu_name: '管理',
    menu_url: 'commodity.brandmanagement.management',
    parentId: '3-2'
}, {
    id: '3-2-2',
    menu_name: '编辑或新增',
    menu_url: 'commodity.brandmanagement.edit',
    parentId: '3-2'
}, {
    id: '3-3',
    menu_name: '商品管理',
    menu_url: 'commodity.commoditymanagement',
    parentId: '3'
}, {
    id: '3-3-1',
    menu_name: '管理',
    menu_url: 'commodity.commoditymanagement.management',
    parentId: '3-3'
}, {
    id: '3-3-2',
    menu_name: '编辑或新增',
    menu_url: 'commodity.commoditymanagement.edit',
    parentId: '3-3'
}, {
    id: '3-4',
    menu_name: '类型管理',
    menu_url: 'commodity.typeManagement',
    parentId: '3'
}, {
    id: '3-4-1',
    menu_name: '管理',
    menu_url: 'commodity.typeManagement.management',
    parentId: '3-4'
}, {
    id: '3-4-2',
    menu_name: '编辑或新增',
    menu_url: 'commodity.typeManagement.edit',
    parentId: '3-4'
}];


function arrBeJson(source){

    let cloneData = JSON.parse(JSON.stringify(source))    // 对源数据深度克隆,否则会影响到源数据

    let tree = cloneData.filter( father =>{              //循环所有项

        let branchArr = cloneData.filter( child =>{

            return father.id == child.parentId      //返回每一项的子级数组

        });
        if(branchArr.length>0){

            father.children = branchArr;    //如果存在子级，则给父级添加一个children属性，并赋值

        }

        return father.parentId==0;      //返回第一层
    });
    return tree     //返回树形数据
}
console.log(arrBeJson(menu_list))

/* 字段名以字符串的形式传入 */
function arrBeJsonA(source, id, parentId, children){   
    let cloneData = JSON.parse(JSON.stringify(source))
    let tree = cloneData.filter(father=>{
        let branchArr = cloneData.filter(child=>{
            return father[id] == child[parentId]
        });
        if(branchArr.length>0){
            father[children] = branchArr
        }
        return father[parentId] == 0    //如果第一层不是parentId=0，请自行修改
    })
    return tree
}
// console.log(arrBeJsonA(menu_list, 'id', 'parentId', 'children') )