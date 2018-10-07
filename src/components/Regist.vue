<template>
    <div>
        <div class="modal-title">
            <h1 class="text-center">注册</h1>
        </div>
        <div class="modal-body">
            <form class="form-group" action="">
                    <div class="form-group">
                        <label for="">头像</label>
                        <input type="file" multiple>
                    </div>
                    <div class="form-group">
                        <label for="">用户名</label>
                        <input class="form-control" type="text" placeholder="6-15位字母或数字" >
                    </div>
                    <div class="form-group">
                        <label for="">密码</label>
                        <input class="form-control" type="password" placeholder="至少6位字母或数字">
                    </div>
                    <div class="form-group">
                        <label for="">再次输入密码</label>
                        <input class="form-control" type="password" placeholder="至少6位字母或数字">
                    </div>
                    <div class="form-group">
                        <label for="">邮箱</label>
                        <input class="form-control" type="email" placeholder="例如:123@123.com">
                    </div>
                    <div class="text-right">
                        <button class="btn btn-primary" type="submit">提交</button>
                        <button class="btn btn-danger" data-dismiss="modal">取消</button>
                    </div>
            </form>
        </div>
    </div>
</template>
