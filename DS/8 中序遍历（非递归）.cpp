#include<stdio.h>
#include<string.h>
#include<stdlib.h>
const int MAX_STACK_SIZE = 100010;
typedef struct node *treePointer;
typedef struct node
{
	char data;
	treePointer leftChild, rightChild;
};
treePointer root;
treePointer stack[MAX_STACK_SIZE];
int top;
int isEmpty(void)
{
	if (top == -1)
	{
		return 1;
	}
	return 0;
}
int isFull(void)
{
	if (top == MAX_STACK_SIZE - 1)
	{
		return 1;
	}
	return 0;
}
void push(treePointer ptr)
{
	if (!isFull())
	{
		stack[++top] = ptr;
	}
}
treePointer pop(void)
{
	if (!isEmpty())
	{
		return stack[top--];
	}
	return NULL;
}
void iter_inorder(treePointer ptr)
{
	top = -1;
	while (1)
	{
		for (; ptr; ptr = ptr->leftChild)
		{
			push(ptr);
		}
		ptr = pop();
		if (ptr == NULL)
		{
			break;
		}
		printf("%c", ptr->data);
		ptr = ptr->rightChild;
	}
}
int main(void)
{
	return 0;
}
