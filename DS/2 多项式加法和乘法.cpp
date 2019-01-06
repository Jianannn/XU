#include<stdio.h>
#include<math.h>
#include<stdlib.h>
#include<string.h>
const int maxn = 110, maxm = 110;
double Exp = 1e-6;
struct Polynomial
{
	float coef;
	int expon;
}A[maxn], B[maxm], C[maxn + maxm], D[maxn * maxm],tmp;
int n, m,cnt;
Polynomial* Add(Polynomial poly1[], Polynomial poly2[])
{
	Polynomial poly3[maxn + maxm];
	int i, pos1 = 0, pos2 = 0;
	cnt = 0;
	while (1)
	{
		if (pos1 == n && pos2 == m)
		{
			break;
		}
		if (pos1 == n)
		{
			poly3[cnt++] = poly2[pos2++];
		}
		else if (pos2 == m)
		{
			poly3[cnt++] = poly1[pos1++];
		}
		else
		{
			if (poly1[pos1].expon < poly2[pos2].expon)
			{
				poly3[cnt++] = poly1[pos1++];
			}
			else if (poly1[pos1].expon > poly2[pos2].expon)
			{
				poly3[cnt++] = poly2[pos2++];
			}
			else
			{
				poly3[cnt].expon = poly1[pos1].expon;
				poly3[cnt++].coef = poly1[pos1++].coef + poly2[pos2++].coef;
			}
		}
	}
	return poly3;
}
Polynomial* Mult(Polynomial poly1[], Polynomial poly2[])
{
	Polynomial poly3[maxn + maxm];
	int i, j;
	cnt = 0;
	for (i = 0; i < n; i++)
	{
		for (j = 0; j < m; j++)
		{
			poly3[cnt].coef = poly1[i].coef * poly2[j].coef;
			poly3[cnt++].expon = poly1[i].expon + poly2[j].expon;
		}
	}
	for (i = 0; i < cnt; i++)
	{
		for (j = i + 1; j < cnt; j++)
		{
			if (poly3[i].expon == poly3[j].expon)
			{
				poly3[i].coef += poly3[j].coef;
				poly3[j].coef = 0;
				poly3[j].expon = 0;
			}
		}
	}
	return poly3;
}
inline void Scanf(void)
{
	int i;
	scanf("%d %d", &n, &m);//n,m分别为两个多项式的总项数 
	for (i = 0; i < n; i++)
	{
		scanf("%f %d", &A[i].coef, &A[i].expon);//先输入系数，在输入指数 
	}
	for (i = 0; i < m; i++)
	{
		scanf("%f %d", &B[i].coef, &B[i].expon);
	}
}
inline void solveadd(void)
{
	int i;
	memcpy(C, Add(A, B), sizeof(tmp) * (n + m));
	printf("The answer of add is:\n");
	for (i = 0;i < cnt;i++)
	{
		if(fabs(C[i].coef) > Exp)
		{
			printf("%d %f\n",C[i].expon,C[i].coef);//先输出指数，再输出系数 
		}
	}
}
inline void solvemul(void)
{
	int i;
	memcpy(D, Mult(A, B), sizeof(tmp) * (n * m));
	printf("The answer of mul is:\n");
	for (i = 0; i < cnt; i++)
	{
		if (fabs(D[i].coef) > Exp)
		{
			printf("%d %f\n", D[i].expon, D[i].coef);//先输出指数，再输出系数 
		}
	}
}
int cmp(const void *a,const void *b)
{
     struct Polynomial *aa = (struct Polynomial *)a;
     struct Polynomial *bb = (struct Polynomial *)b;
     return (((aa->expon) > (bb->expon)) ? 1 : -1);
}
inline void Sort(void)
{
	qsort(A,n,sizeof(Polynomial),cmp);
	qsort(B,m,sizeof(Polynomial),cmp);
}
int main(void)
{
	//freopen("input.txt", "r", stdin);
	//freopen("output.txt", "w", stdout);
	Scanf();//输入 
	Sort();//排序 
	solveadd();//实现多项式加法并输出 
	solvemul();//实现多项式乘法并输出 
	return 0;
}


/*

A = 3 * x^20 + 2 * x^5 + 4
B = 3 * x^4 + 2 * x^3 + 3 * x^2 + 1

input:

3 4

3 20
2 5
4 0

3 4
2 3
3 2
1 0

output:

The answer of add is:
0 5.000000
2 3.000000
3 2.000000
4 3.000000
5 2.000000
20 3.000000
The answer of mul is:
0 4.000000
2 12.000000
3 8.000000
4 12.000000
5 2.000000
7 6.000000
8 4.000000
9 6.000000
20 3.000000
22 9.000000
23 6.000000
24 9.000000

*/
