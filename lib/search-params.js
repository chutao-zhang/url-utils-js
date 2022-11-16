"use strict";

module.exports = {
    combine: function (obj, url, opts) {
        var search = '';

        if (Object.prototype.toString.call(obj) === '[object Object]') {
            search = Object.keys(obj).map(key => {
                var val = obj[key];

                if (opts && opts.useEncode) {
                    val = encodeURIComponent(val);
                }

                return key + '=' + val;
            }).join('&');
        }

        return !!url ? url + '?' + search : search;
    },

    getAll: function (url) {
        var curUrl = url || (window && window.location.href || '');
        var index = curUrl.indexOf('?');
        var search = index > -1 ? curUrl.slice(index + 1) : '';
        var obj = {};

        search.split('&').filter(item => !!item).map(item => item.split('=')).forEach(item => {
            obj[item[0]] = decodeURIComponent(item[1] || '');
        });

        return obj;
    },

    getByName: function (name, url) {
        var obj = this.getAll(url);
        return obj[name] || '';
    },

    getByNames: function (names, url) {
        var obj = this.getAll(url);
        var result = {};

        names.forEach(item => {
            var dataType = Object.prototype.toString.call(item);

            if (dataType === '[object String]') {
                result[item] = obj[item] || '';
            }

            if (dataType === '[object Object]') {
                result[item.alias || item.name] = obj[item.name] || '';
            }
        });

        return result;
    }
};