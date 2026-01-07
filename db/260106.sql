/* distinct는 현재 보이는 컬럼에서 row별로 중복을 제거 */
SELECT DISTINCT bookname, publisher
FROM book;

-- ditinct는 내부적으로 group by 이용한다.
SELECT DISTINCT bookname, publisher
FROM book
GROUP BY bookname, publisher;

-- 도서를 도서명 오름차순으로 정렬하여 검색
SELECT * FROM book ORDER BY bookname;

-- 도서를 도서명 내림차순으로 정렬하여 검색
SELECT * FROM book ORDER BY bookname DESC;

-- 도서를 출판사 이름 기준으로  오름차순, 같은 출판사 이름이 있다면
-- 가격으로 오름차순으로 정렬하여 검색
SELECT * FROM book ORDER BY publisher, price;

/* 집계 함수(그룹 함수) 
sum: 그룹에서 모두 더한 값
min: 그룹에서 최소값
max: 그룹에서 최댓값
count: 그룹 row 수, NULL은 카운팅하지 않는다. 
avg : sum /count

group by로 그룹을 지정하지 않으면 전체 row가 한 그룹이 된다. 
*/
SELECT sum(price), MAX(price), MIN(price)
 			, COUNT(*), AVG(price)
			 , SUM(price)/ COUNT(*)
			 FROM book;

-- ORDERS 테이블의 row 수는?
SELECT COUNT(*) FROM orders;

-- count 함수는 null을 카운팅하지 않는다.
SELECT COUNT(phone) , COUNT(*) FROM customer;

-- 출판사 별로 가장 비싼 책의 가격과 저렴한 책의 가격을 검색
SELECT publisher, MAX(price), MIN(price), COUNT(*)
FROM book
GROUP BY publisher;

-- group by에 여러 컬럼을 쓰면, 
-- 컬럼 조합했을 때 중복되는 row끼리  하나의 그룹이 된다.
SELECT publisher, bookname, MAX(price), MIN(price), COUNT(*)
FROM book
GROUP BY publisher, bookname;

-- Q1) 고객이 주문한 도서의 총판매액을 구하시오.
-- as: alias 알리아스,  별명
SELECT sum(saleprice) AS 'total_sale_price 총판매액' FROM orders;

-- Q2) 김연아 고객이 주문한 도서의 총판매액을 구하시오. / 합계, count 등은 having과 연관 
SELECT sum(saleprice) FROM orders 
WHERE custid=2;

-- Q3) 마당서점의 도서 판매 건수를 구하시오.
SELECT COUNT(*) FROM orders;

-- Q4) 고객별로 주문한 도서의 총수량과 총판매액을 구하시오.
SELECT custid, COUNT(orderid) AS 도서수량, sum(saleprice) AS 총액
FROM orders
GROUP BY custid;

/*가격이 8,000원 이상인 도서를 구매한 고객에 대하여
고객별 주문 도서의 총수량을 구하시오.
단, 2권 이상 구매한 고객에 대해서만 구하시오.
*/

SELECT * FROM orders 
WHERE saleprice >=8000;

SELECT custid, COUNT(orderid) FROM orders 
WHERE saleprice >=8000
GROUP BY custid;

SELECT custid, COUNT(orderid) FROM orders 
WHERE saleprice >=8000
GROUP BY custid
HAVING COUNT(*) >=2;

-- having절에서 alias 사용할 수 있다.
SELECT custid, COUNT(orderid) AS cnt
FROM orders 
WHERE saleprice >=8000
GROUP BY custid
HAVING cnt >=2;

-- Q5) 출판사별 출판한 도서가격의 평균가격이 
-- 20,000원 이상인 출판사를 구하시오.
SELECT publisher, AVG(price)
FROM book
GROUP BY publisher
HAVING AVG(price) >=20000;

/* 조인, 두 테이블 간의 설정된 관계를 설정하여 
	원하는 컬럼의 내용을 검색할 때 사용

	(INNER) JOIN: 너도 있고, 나도 있는 데이터만 검색하자 (교집합)
	LEFT (OUTER) JOIN: 왼쪽에 있는 데이터는 검색되는 걸 무조건 보장,
							우측은 연결될 데이터가 있다면
							연결한다. 없으면 null 표시 

*/
-- inner join 
SELECT c.name, c.address, c.phone, o.orderid
FROM customer c
JOIN orders o
ON o.custid = c.custid;
 
-- left outer join
SELECT c.name, c.address, c.phone, o.orderid, o.saleprice
FROM customer c 
LEFT JOIN orders o
ON o.custid = c.custid;

-- Q1) 고객번호, 고객이름, 고객주소, 주문번호, 
-- 판매금액, 판매날짜를 검색해 주세요.
-- 주문번호 기준 오름차순으로 정렬
SELECT c.custid, c.name, c.address
	, o.orderid, o.saleprice, o.orderdate
FROM customer c 
JOIN orders o
ON o.custid= c.custid
ORDER BY o.orderid;

-- Q2) 고객별로 주문한 도서의 총판매액을 구하고,
-- 고객별로 정렬하시오.
SELECT c.custid, c.name, SUM(o.saleprice) -- GROUP BY를 썼으면, SELECT FROM 사이에 있는 것들만 작성 가능.
FROM customer c
JOIN orders o
ON c.custid = o.custid
GROUP BY c.custid, c.name -- c.custid, c.name (슈퍼키)
ORDER BY c.name ASC;

-- Q3) 주문번호, 고객의 이름, 책이름 출력 
SELECT * o.orderid, c.name, b.bookname
FROM orders o 
JOIN customer c
ON c.custid= o.custid
JOIN book b
ON b.bookid = o.bookid
ORDER BY c.name;

-- Q4) 가격이 20,000원인 도서를 주문한 고객의 이름과 도서의 이름을 구하시오.
SELECT c.name, b.bookname
FROM orders o
JOIN customer c
ON c.custid= o.custid
JOIN book b
ON b.bookid = o.bookid
WHERE b.price = 20000;

-- Q5) 고객의 이름과 고객이 주문한 도서의 이름과 판매가격을 검색
-- 도서를 구매하지 않은 고객도 포함(NULL 나오면 된다)
SELECT c.name, b.bookname, o.saleprice
FROM customer c 
LEFT JOIN orders o
ON c.custid = o.custid
LEFT JOIN book b
ON b.bookid = o.bookid;

SELECT c.name, b.bookname, o.saleprice
FROM orders o
INNER JOIN book b
ON b.bookid = o.bookid
RIGHT JOIN customer c
ON c.custid = o.custid;

/* 서브쿼리 (subquery) 
select in select, 서브쿼리가 아닌 다른 방법으로 해결이 가능하다면
사용을 지양하는 게 좋다. 왜냐하면 성능이 좋지 않다. (항상 X)
*/
-- 가장 비싼 책의 가격 
SELECT MAX(price) FROM book;

-- 35,000원인 책의 정보를 검색
SELECT * FROM book 
WHERE price = 35000; -- 하드코딩, 결과값이 바뀌지 않을 때. 

SELECT * FROM book 
WHERE price = (SELECT MAX(price) FROM book);

/* where equal 사용할 때는  스칼라값만 사용 가능 
row 1줄 column 1개 (1행 1열)를 스칼라값(값 하나)이라고 하며,
위의 서브쿼리를 스칼라 서브쿼리라고 부른다. 
*/

-- column 1개 row가 여러 개인 경우 where in 과 함께 사용 가능
SELECT custid FROM orders;

SELECT NAME FROM customer
WHERE custid IN (SELECT custid FROM orders);

-- Q6) 대한미디어 출판사에서 출판한 도서를 구매한 고객의 이름 검색
SELECT c.name 
FROM book b
JOIN orders o
ON b.bookid = o.bookid
JOIN customer c
ON c.custid = o.custid
WHERE b.publisher = '대한미디어';

-- 1)  대한미디어'에서 출간한 책의 id를 구하시오. (3, 4)
SELECT bookid FROM book WHERE publisher = '대한미디어';

-- 2) 3,4번 책 거래를 한 고객번호를 구하시오.
SELECT custid FROM orders WHERE bookid IN (3,4);

-- 3) 1번 고객의 이름을 출력하시오.
SELECT NAME FROM customer WHERE custid IN (1);

-- 1~3번 합체 
SELECT NAME FROM customer
WHERE custid IN (SELECT custid FROM orders
					WHERE bookid  IN (SELECT bookid FROM book
											WHERE publisher = '대한미디어'));
											
-- 출판사별로 출판사의 평균 도서가격보다 비싼 도서를 구하시오.
-- 연관 서브쿼리 
SELECT b1.bookname, b1.publisher
FROM book b1
WHERE b1.price > (SELECT AVG(b2.price) FROM book b2
						WHERE b2.publisher = b1.publisher);

/* union(중복 제거),  union all(중복 허용)
여러 select 결과를 합칠 때 사용. 성능은 좋지 않다. 
컬럼 수, 타입이 맞아야 한다. 타입이 안 맞으면 형변환이 일어난다. 
*/
SELECT *FROM book WHERE publisher = '굿스포츠'
UNION ALL 
SELECT *FROM book WHERE publisher = '대한미디어';

-- 책 번호 1~5 가져오는 쿼리
-- 책 번호 3~8 가져오는 쿼리
SELECT * FROM book WHERE bookid <=5
UNION ALL 
SELECT * FROM book WHERE bookid BETWEEN 3 AND 8;

-- Q7) 대한민국에 거주하는 고객의 이름과 
-- 도서를 주문한 고객의 이름을 모두 나타내시오. (중복허용)
SELECT NAME 
FROM customer 
WHERE address LIKE ('대한민국%')
UNION 
SELECT c.name
FROM customer c
JOIN orders o
ON c.custid = o.custid;

/* insert row 추가
insert into 테이블 이름
(컬럼들) - 생략하지 말고 꼭 쓸 것. 
values
(값들)

insert into 테이블 이름
set 컬럼명 = 값
, 컬럼명 = 값
*/

-- 오로지 1 row insert만 가능 
INSERT INTO book
SET bookid = 12
, bookname = '스포츠 의학'
, publisher = '한솔의학서적'
, price = 90000;

-- 1 row or 멀티 row 가능
INSERT INTO book
(bookid, bookname, publisher, price)
VALUES
( 11, '스포츠 의학', '한솔의학서적', 90000 );

INSERT INTO book
(bookid, bookname, publisher, price)
VALUES 
( 15, '스포츠 의학', '한솔의학서적', 90000 ),
( 16, '스포츠 의학', '한솔의학서적', 90000 );

INSERT INTO book
(bookid, bookname, publisher, price)
SELECT 14, '러닝SQL', publisher, price
FROM book
WHERE bookid =12;
