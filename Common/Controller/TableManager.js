/**
 * Implements various features of tables
 * @requires jQuery
 * @author Luis Alberto Batista Pedroso
 */
class TableManager {

    /**
     * @@type Object An instance of Element that represents the tbody of table
     */
    THead = new Object();

    /**
     * @@type Object An instance of Element that represents the tbody of table
     */
    TBody = new Object();

    /**
     * initialize an instance of TableManager
     * @param {String} theadSelector A text with the tablr header selector
     * @param {String} tbodySelector A text with the tablr body selector
     * @returns {TableManager.constructor} An instance of TableManager
     */
    constructor(theadSelector = "thead", tbodySelector = "tbody") {
        this.THead = $(theadSelector);
        this.TBody = $(tbodySelector);
    }

    /**
     * Create and return a new DOM Element as a header column
     * @param {any} content A content of put in the header column
     * @returns {Element} An instance of Element
     */
    CreateHeader(content) {
        let header = document.createElement("th");
        header.textContent = content;
        return header;
    }

    /**
     * Create all coluns and put in the new tablr row
     * @param {Array} listOfColumns A array with the values to put ib the row
     * @returns {Element} An instance of Element
     */
    CreateRow(listOfColumns) {
        let row = document.createElement("tr");
        for (let i in listOfColumns) {
            let column = this.CreateColumn(listOfColumns[i]);
            row.append(column);
        }
        return row;
    }

    /**
     * Create a new DOM Element as a column to put in the table body
     * @param {any} content A content of put in the header column
     * @returns {Element} An instance of Element
     */
    CreateColumn(content) {
        let column = document.createElement("td");
        column.textContent = content;
        return column;
    }

    /**
     * Create the rows and our columns
     * @returns {void}
     */
    PushToTableHeader(listOfContent) {
        let row = this.CreateRow();
        for (let i in listOfContent) {
            let header = this.CreateHeader(listOfContent[i]);
            row.append(header);
        }
        this.THead.append(row);
    }

    /**
     *
     * @param {type} listOfContent
     * @returns {void}
     */
    PushToTableBody(listOfContent) {
        for (let i in listOfContent) {
            let row = this.CreateRow(listOfContent[i]);
            this.TBody.append(row);
        }
    }

}