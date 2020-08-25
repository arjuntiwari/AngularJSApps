"use strict";
require("rxjs/add/operator/map");
var _ = require("underscore");
var PopupService = (function () {
    function PopupService() {
        this.modals = [];
    }
    PopupService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    PopupService.prototype.remove = function (id) {
        // remove modal from array of active modals
        var modalToRemove = _.findWhere(this.modals, { id: id });
        this.modals = _.without(this.modals, modalToRemove);
    };
    PopupService.prototype.open = function (id) {
        // open modal specified by id
        var modal = _.findWhere(this.modals, { id: id });
        modal.open();
    };
    PopupService.prototype.close = function (id) {
        // close modal specified by id
        var modal = _.find(this.modals, { id: id });
        modal.close();
    };
    return PopupService;
}());
exports.PopupService = PopupService;
//# sourceMappingURL=popup.service.js.map