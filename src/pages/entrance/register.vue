<style lang="less" module>
@import '../../assets/less/variable.less';
@contentW: 350px;
@item-height: 38px;
@iconW: 40px;
.item {
    position: relative;
    height: @item-height;
    margin-bottom: 10px;
}

.iconWrap {
    position: absolute;
    left: 0;
    top: 0;
    width: @iconW;
    height: @item-height;
    text-align: center;
    line-height: @item-height;
}

.input {
    padding: 0 10px 0 @iconW;
    margin: 0;
    width: 100%;
    height: @item-height;
    color: @font-color-base;
    background-color: @body-color;
    transition: border .3s, background-color .3s;
    border-radius: 4px;
    border: 1px solid @line-color-split;
    &:focus {
        background-color: #fff;
        border-color: @theme-color;
    }
    &.error {
        border-color: @hint-color;
    }
}

.btnSubmit {
    padding-top: 10px;
    padding-bottom: 10px;
}

.itemHint {
    margin-top: -8px;
    margin-bottom: 10px;
    height: 20px;
    line-height: 20px;
    color: @hint-color;
}
</style>
<template>
    <form :class="$style.content" @submit.prevent="registure">
        <div :class="$style.item">
            <span :class="$style.iconWrap">
                <y-icon name="mail" size="10" color="#999"></y-icon>
            </span>
            <input :class="[$style.input,{[$style.error]:!emailHint}]" type="text" maxlength="30" v-model="user.email" placeholder="邮箱" @blur="checkEmail()" @focus="resetHint()">
        </div>
        <div :class="$style.itemHint" v-if="!emailHint">
            <y-hint name="error" size="10">{{emailErrorText}}</y-hint>
        </div>
        <div :class="$style.item">
            <span :class="$style.iconWrap">
                <y-icon name="password" size="10" color="#999"></y-icon>
            </span>
            <input :class="[$style.input,{[$style.error]:!pwdHint}]" type="password" maxlength="30" v-model="user.password" placeholder="密码" @focus="resetHint()">
        </div>
        <div :class="$style.item">
            <span :class="$style.iconWrap">
                <y-icon name="password" size="10" color="#999"></y-icon>
            </span>
            <input :class="[$style.input,{[$style.error]:!pwdHint}]" type="password" maxlength="30" v-model="user.pwd" placeholder="重复密码" @blur="checkPwd()" @focus="resetHint()">
        </div>
        <div :class="$style.itemHint" v-if="!pwdHint">
            <y-hint name="error" size="10">{{pwdErrorText}}</y-hint>
        </div>
        <div>
            <y-button :class="$style.btnSubmit" type="submit" :block="true" :disabled="false">{{ isLoading ? '正在注册...' : '注册'}}</y-button>
        </div>
    </form>
</template>
<script>
import { mapGetters } from 'vuex';
import Util from '../../util';
export default {
    data() {
        return {
            pwdHint: true,
            emailHint: true,
            pwdErrorText: '',
            emailErrorText: '邮箱格式不正确',
            user: {
                email: '',
                password: '',
                pwd: ''
            }
        }
    },
    computed: {
        ...mapGetters({
            isLoading: 'regLoading'
        })
    },
    methods: {
        resetHint() {
            this.pwdHint = true;
            this.emailHint = true;
        },
        checkEmail() {
            const str = this.user.email.trim();
            if (str) {
                this.emailHint = Util.isEmail(str);
            } else {
                this.emailHint = false;
            }
            return this.emailHint;
        },
        checkPwd() {
            if (this.user.password !== this.user.pwd) {
                this.pwdHint = false;
                this.pwdErrorText = '密码不一致';
            } else if (this.user.pwd.length >= 6 && this.user.pwd.length <= 20) {
                this.pwdHint = true;
            } else {
                this.pwdHint = false;
                this.pwdErrorText = '密码长度在6~20位之间';
            }
            return this.pwdHint;
        },
        validate() {
            return this.checkEmail() && this.checkPwd();
        },
        registure() {
            if (!this.validate()) return false;
            const { email, password } = this.user;
            this.$store.dispatch('account/REGISTER', { email, password })
                .then(res => {
                    console.log(res);
                    // this.$router.replace(this.$route.query.redirect || '/')
                }, res => {
                    console.log(res);
                    this.$Toast.show({ text: res.msg, duration: 3000 });
                })
        }
    }
}
</script>