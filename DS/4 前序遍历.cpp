#include<stdio.h>
#include<string.h>
#include<stdlib.h>
typedef struct node *treePointer;
typedef struct node
{
	char data;
	treePointer leftChild, rightChild;
};
treePointer root;
void preorder(treePointer ptr)
{
	if (ptr != NULL)
	{
		printf("%c", ptr->data);
		preorder(ptr->leftChild);
		preorder(ptr->rightChild);
	}
}
