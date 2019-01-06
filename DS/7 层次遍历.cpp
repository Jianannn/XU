#include<stdio.h>
#include<string.h>
#include<stdlib.h>
const int MAX_QUEUE_SIZE = 100010;
typedef struct node *treePointer;
typedef struct node
{
	char data;
	treePointer leftChild, rightChild;
};
treePointer root;
treePointer queue[MAX_QUEUE_SIZE];
int front, rear;
int queueFull(void)
{
	if ((rear + 1) % MAX_QUEUE_SIZE == front)
	{
		return 1;
	}
	return 0;
}
int queueEmpty(void)
{
	if (front == rear)
	{
		return 1;
	}
	return 0;
}
void push(treePointer ptr)
{
	if (!queueFull())
	{
		rear++;
		rear %= MAX_QUEUE_SIZE;
		queue[rear] = ptr;
	}
}
treePointer pop(void)
{
	if (!queueEmpty())
	{
		front++;
		front %= MAX_QUEUE_SIZE;
		return queue[front];
	}
	return NULL;
}
void level_order(treePointer ptr)
{
	front = 0;
	rear = 0;
	if (ptr == NULL)
	{
		return;
	}
	push(ptr);
	while (1)
	{
		ptr = pop();
		if (ptr != NULL)
		{
			printf("%c",ptr->data);
			if (ptr->leftChild)
			{
				push(ptr->leftChild);
			}
			if (ptr->rightChild)
			{
				push(ptr->rightChild);
			}
		}
		else
		{
			break;
		}
	}
}
int main(void)
{
	return 0;
}
