module.exports = {
    APIError: function (code, msg, data) {
        this.code = code || 'internal:unknown_error';
        this.msg = msg || '';
        this.data = data || '';
    },
    resSuccess: function (data) {
        this.code = 10000;
        this.msg = 'success';
        this.data = data || null;
    },
    resFailure: function (data) {
        this.code = 10070;
        this.msg = 'failure';
        this.data = data || null;
    }
};