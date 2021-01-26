class Node
{
    constructor(element)
    {
        this.element=element;
        this.next=null
    }
}
class LinkedList
{
    constructor()
    {
        this.head=null;
        this.size=0;
    }
}
add(element)
{
    var node=new Node(element);
    var current;
    if(this.head==null)
    {
        this.head=node;
    }
    else 
    {
        current=this.head;
        while(current.next)
        {
            current=current.next;
        }
        current.next=node;
    }
    this.size++;
}
removeElement(element)
{
    var current=this.head;
    var prev=null;
    while(current!=null)
    {
        if(current.element==element)
        {
            if(prev==null)
            {
                this.head=current.next;
            }
            else
            {
            prev.next=current.next;
            }
            this.size--;
        }
        prev=current;
        current=current.next;
    }
    return -1;
}


let elementVal= document.getElementById("elementValue").value
if(document.getElementById('addElement').clicked == true)
{
   console.log("button was clicked");
}
if(document.getElementById('removeElement').clicked == true)
{
   alert("button was clicked");
}
if(document.getElementById('viewElement').clicked == true)
{
   alert("button was clicked");
}

