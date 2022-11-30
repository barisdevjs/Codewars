class PaginationHelper {
	constructor(collection, itemsPerPage) {
	this.collection = collection;
    this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
	return this.collection.length;
	}
	pageCount() {
	return Math.ceil(this.collection.length/this.itemsPerPage)
	}
	pageItemCount(pageIndex) {
        const itemCount = this.itemCount();
        const pageCount = this.pageCount();
       if (pageIndex >= pageCount || pageIndex < 0) return -1;
       return this.collection.slice(pageIndex * this.itemsPerPage, itemCount).splice(0, this.itemsPerPage).length;
	}
	pageIndex(itemIndex) {
        if ( itemIndex <0 || itemIndex > this.itemCount()-1 ) {
            return -1
        }
        if ( this.itemCount() === itemIndex) return 1
        return Math.ceil((itemIndex+1)/this.itemsPerPage) -1
    }
}

const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
const helper = new PaginationHelper(collection, 10)
console.log(helper.itemCount(), helper.pageCount(), helper.pageItemCount(2),helper.pageIndex(22))