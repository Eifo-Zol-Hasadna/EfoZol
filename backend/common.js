
function init() {

    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };


    Array.prototype.groupBy = function (fnValueProvider, args) {
        var len = this.length;
        if (typeof fnValueProvider != "function")
            throw new TypeError();

        if (len == 0)
            return 0;

        var groupedList = [];

        for (var i = 0; i < len; i++) {
            if (i in this) {
                var addNewGroup = true;
                var groupLen = groupedList.length;

                var key = fnValueProvider.call(this[i]);

                for (var j = 0; j < groupLen; j++) {
                    if (groupedList[j].Key == key) {
                        addNewGroup = false;
                        groupedList[j].Items.push(this[i]);
                    }
                }

                if (addNewGroup) {
                    var newGroup = new Object();
                    newGroup.Key = key
                    newGroup.Items = [];
                    newGroup.Items.push(this[i]);
                    groupedList.push(newGroup);
                }
            }
        }

        return groupedList;
    };

    Array.prototype.sum = function (fnValueProvider, args) {/// <summary>adds all the values of a param in all the array </summary>
        /// <param name="fnPredicate" type="function">search function delegete  ( items().sum(function() { return  this.Price(); }) )</param>
        var len = this.length;
        if (typeof fnValueProvider != "function")
            throw new TypeError();

        if (len == 0)
            return 0;

        var sum = 0;
        for (var i = 0; i < len; i++) {
            if (i in this) {
                sum += fnValueProvider.call(this[i]);
            }
        }

        return sum;
    };

    Array.prototype.orderBy = function (fnPredicate) {/// <summary>orders the array by a specific proprety  </summary>
        /// <param name="fnPredicate" type="function">order function delegete (items().orderBy(function () {return this.ID });)</param>
        var len = this.length;
        if (typeof fnPredicate != "function")
            throw new TypeError();

        var array = this;
        var temp = {};
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len - 1; j++) {
                if (fnPredicate.call(this[j]) > fnPredicate.call(this[j + 1])) {
                    temp = array[j];

                    array[j] = array[j + 1];

                    array[j + 1] = temp;
                }
            }
        }

        return array;

    }
}


module.exports = init;