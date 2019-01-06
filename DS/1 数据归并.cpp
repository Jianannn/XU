#include<stdio.h>
int c[1000010],d[1000010];
int main(void)
{
	int n,m,i,N = 1,z1,z2;
	while(scanf("%d",&n),n != -1)
	{
		for(i = 0;i < n;i++)
		{
			scanf("%d",c + i);
		}
		scanf("%d",&m);
		for(i = 0;i < m;i++)
		{
			scanf("%d",d + i);
		}
		z1 = 0;
		z2 = 0;
		while(1)
		{
			if(z1 == n && z2 == m)
			{
				break;
			}
			if(z1 == n)
			{
				printf("%d",d[z2++]);
			}
			else if(z2 == m)
			{
				printf("%d",c[z1++]);
			}
			else
			{
				if(c[z1] < d[z2])
				{
					printf("%d",c[z1++]);

				}
				else if(c[z1] > d[z2])
				{
					printf("%d",d[z2++]);

				}
				else
				{
					printf("%d",c[z1++]);
					z2++;
				}
			}
			printf(" ");
		}
		printf("\n");
	}
	return 0;
}

/*

Input:
5
4 26 46 56 95
11
15 17 26 30 46 48 56 58 82 90 95

Output:
4 15 17 26 30 46 48 56 58 82 90 95

*/
