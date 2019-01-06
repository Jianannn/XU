#include<stdio.h>
#include<stdlib.h>
#include<string.h>
typedef struct
{
	int key;
}element;
typedef struct stack *stackPointer;
typedef struct stack
{
	element data;
	stackPointer link;
};
stackPointer top;
void Create(void)
{
	top = NULL;
}
int IsFull(void)
{
	stackPointer temp;
	temp = (stackPointer)malloc(sizeof(stackPointer));
	if(temp == NULL)
	{
		return 1;
	}
	return 0;
}
void Push(element item)
{
	if(IsFull())
	{
		return;
	}
	stackPointer temp;
	temp = (stackPointer)malloc(sizeof(stackPointer));
	temp->data = item;
	temp->link = top;
	top = temp;
}
int IsEmpty(void)
{
	if(top == NULL)
	{
		return 1;
	}
	return 0;
}
void Pop(void)
{
	stackPointer temp = top;
	element item;
	if(!temp)
	{
		return;
	}
	item = temp->data;
	top = temp->link;
	free(temp);
}
int main(void)
{
	
	return 0;
}
