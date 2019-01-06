#include<stdio.h>
#include<string.h>
#include<stdlib.h>
const int MAX_QUEUE_SIZE = 100010;
int queue[MAX_QUEUE_SIZE];
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
void push(int ptr)
{
	if (!queueFull())
	{
		rear++;
		rear %= MAX_QUEUE_SIZE;
		queue[rear] = ptr;
	}
}
int pop(void)
{
	if (!queueEmpty())
	{
		front++;
		front %= MAX_QUEUE_SIZE;
		return queue[front];
	}
	return NULL;
}
