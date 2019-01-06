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
void inorder(treePointer ptr)
{
	if (ptr != NULL)
	{
		inorder(ptr->leftChild);
		printf("%c", ptr->data);
		inorder(ptr->rightChild);
	}
}
