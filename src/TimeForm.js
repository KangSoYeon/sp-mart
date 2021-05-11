export default function TimeForm() {

    Date.prototype.yyyymmdd = function () {
        var mm = this.getMonth() + 1;
        var dd = this.getDate();
    
        return [this.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
        ].join('');
    };
    
    Date.prototype.hhmmss = function () {
        var hh = this.getHours();
        var mm = this.getMinutes();
        var ss = this.getSeconds();
    
        return [(hh > 9 ? '' : '0') + hh,
        (mm > 9 ? '' : '0') + mm,
        (ss > 9 ? '' : '0') + ss,
        ].join('');
    };

    Date.prototype.yyyymmddhhmmss = function () {
        return this.yyyymmdd() + this.hhmmss();
    }

}
