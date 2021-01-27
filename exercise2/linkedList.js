class Node {
    constructor(element) {
        this.element = element;
        this.next = null

    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        //alert("test")
    }
    add(element) {
        var node = new Node(element);
        var current;
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    removeElement(element) {
        var current = this.head;
        var prev = null;
        while (current != null) {
            if (current.element == element) {
                if (prev == null) {
                    this.head = current.next;
                }
                else {
                    prev.next = current.next;
                }
                this.size--;
            }
            prev = current;
            current = current.next;
        }
        // return -1;
    }
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
        document.getElementById('res').value = str
    }
}


const ll = new LinkedList();

function addE() {
    var e1 = document.getElementById('ele').value
    ll.add(e1)
    ll.printList();
}
function remE() {
    var e2 = document.getElementById('ele').value
    ll.removeElement(e2)
    ll.printList();
}


