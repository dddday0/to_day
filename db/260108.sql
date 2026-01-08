/* Q1) 2006년 1월 1일 이후에 기록이 생성(create_date)된
고객 중에, 이름이 Steven, Young인 사람이 아닌 고객  정보 조회 */
SELECT *
FROM customer 
WHERE first_name NOT IN('Steven', 'Young') 
AND create_date > '2006-01-01 23:59:59';

/*  Q2) 2005년에 렌탈한 고객의 이름, 성 조회(중복제거)*/
SELECT DISTINCT c.first_name, c.last_name
FROM customer c
JOIN rental r
ON c.customer_id = r.customer_id
WHERE r.rental_date BETWEEN '2005-01-01 00:00:00' AND '2005-12-31 23:59:59';

/* Q3) 10달러에서 11.99달러 사이의 모든 결제 정보를 조회.
표시 컬럼: 고객번호, 결제날짜, 금액*/
SELECT customer_id, payment_date, amount
FROM payment
WHERE amount BETWEEN 10.0 AND 11.99;

/* Q4) FA와 FR 사이에 성이 속하는 고객을 조회,
성 기준으로 내림차순 정렬
표시컬럼: 성, 이름 */ 
SELECT first_name, last_name
FROM customer
WHERE last_name >='FA' AND last_name < 'FS'
ORDER BY last_name DESC;

SELECT 'AZ' < 'BA';
SELECT '가다' < '가라';

/* Q5) 영화 제목에 'PET'이 포함된 영화의 등급과 같은 영화들의
제목과 등급을 표시해 주세요. */
SELECT title, rating
FROM film
WHERE rating IN (SELECT rating FROM film 
						where title LIKE('%PET%'));
						
explain analyze SELECT DISTINCT f1.title, f1.rating
FROM film f1
JOIN film f2
ON f1.rating = f2.rating
WHERE f2.title LIKE ('%PET%'); 

SELECT LEFT('abcdef', 2);
SELECT last_name, LEFT(last_name, 1) FROM customer;

-- Q6) 성이 Q로 시작하는 고객 조회
SELECT * FROM customer
WHERE last_NAME >= 'Q'
AND last_name < 'R';

SELECT * FROM customer
WHERE left(last_name, 1) = 'Q'; 

/* NULL 찾고 싶을 때 방법 IS NULL, IS NOT NULL */
SELECT * FROM staff
WHERE !(picture IS NULL);  

/* Q7)  대여를 반납하지 않은 정보를 조회 
표시컬럼: 대여ID, 고객ID */
SELECT rental_id, customer_id
FROM rental 
WHERE return_date IS NULL;

/*  Q8) madang_db 사용, 한번도 주문을 한 적이 없는 고객 찾기 
*/
USE madangdb;

SELECT *
FROM customer c
LEFT JOIN orders o
ON c.custid = o.custid
WHERE o.custid IS NULL; 

SELECT *
FROM customer c
WHERE NOT EXISTS (SELECT o.orderid FROM orders o
    WHERE o.custid = c.custid);

/* Q9) 고객번호가 5가 아니면서
(결제날짜가 '2005-08-23'이거나 결제금액이 8달러 이상)인
payment_id를 조회하시오. 1,418 rows */
SELECT payment_id FROM payment
WHERE customer_id != 5 AND (
(payment_date BETWEEN '2005-08-23 00:00:00' AND '2005-08-23 23:59:59')
OR amount >= 8);

/*  Q10) payment 테이블에서 금액이 1.98, 7.98 또는 9.98인 
모든 행을 조회 */
SELECT *
FROM payment 
WHERE amount IN (1.98, 7.98, 9.98); 

/* Q11) 성의 두번째 위치에 A가 있고 A 다음에 W가 있는 모든 
고객을 조회 */
SELECT * FROM customer
WHERE last_name LIKE '_AW%';

/* Q12) 모든 고객의 성, 이름, 주소 조회  */
SELECT c.first_name, c.last_name, a.address
FROM customer c
JOIN address a
ON a.address_id = c.address_id;

/* Q13) 모든 고객의 성, 이름, 주소 , 살고 있는 도시 조회  */
SELECT c.first_name, c.last_name, a.address, t.city
FROM customer c
JOIN address a
ON a.address_id = c.address_id
JOIN city t
ON a.city_id = t.city_id;

/* Q14)  캘리포니아에 거주하는 모든 고객의 
이름, 성, 주소 및 도시 조회 */
SELECT c.first_name, c.last_name, a.address, t.city
FROM customer c
JOIN address a
ON a.address_id = c.address_id
JOIN city t
ON a.city_id = t.city_id
WHERE a.district = 'California';

SELECT c.first_name, c.last_name, a.address, t.city
FROM customer c
JOIN address a
ON a.address_id = c.address_id
AND a.district = 'California'
JOIN city t
ON a.city_id = t.city_id;

/* Q15) Cate McQueen 또는 Cuba Birch 가
출연한 모든 영화를 조회*/
SELECT f.title
FROM film f
JOIN film_actor fa
ON f.film_id = fa.film_id
JOIN actor a
ON fa.actor_id = a.actor_id
WHERE a.last_name IN ('McQueen', 'Birch') AND a.first_name IN('Cate', 'Cuba'); -- 위험 


SELECT  f.title
FROM film f
JOIN film_actor fa
ON f.film_id = fa.film_id
JOIN actor a
ON fa.actor_id = a.actor_id
WHERE (a.first_name = 'Cate' AND a.last_name = 'McQueen')
OR (a.first_name = 'Cuba' AND a.last_name = 'Birch');

SELECT f.title
FROM film f
JOIN film_actor fa
ON f.film_id = fa.film_id
JOIN actor a
ON fa.actor_id = a.actor_id
WHERE (a.first_name, a.last_name) IN (
												('Cate','McQueen'),
											 	('Cuba','Birch')
												);

/* Q16) Cate McQueen, Cuba Birch 가 동반출연한 
모든 영화를 조회 */
SELECT f.film_id, f.title
FROM film f
JOIN film_actor fa
ON f.film_id = fa.film_id
JOIN actor a
ON fa.actor_id = a.actor_id
WHERE  (a.first_name = 'Cate' AND a.last_name = 'McQueen') 
OR (a.first_name = 'Cuba' AND a.last_name = 'Birch') 
GROUP BY f.film_id, f.title
HAVING COUNT(a.actor_id) >=2; 

SELECT f.film_id, f.title
FROM film f
JOIN film_actor fa1
ON f.film_id = fa1.film_id
JOIN actor a1
ON fa1.actor_id = a1.actor_id
JOIN film_actor fa2
ON f.film_id = fa2.film_id
JOIN actor a2
ON fa2.actor_id = a2.actor_id
WHERE a1.first_name = 'CATE' AND a1.last_name = 'MCQUEEN'
  AND a2.first_name = 'CUBA' AND a2.last_name = 'BIRCH';
  
  ANALYZE  SELECT F.title
FROM film F
INNER JOIN film_actor FA
ON FA.film_id = F.film_id
INNER JOIN actor A
ON A.actor_id = FA.actor_id
WHERE (A.first_name, A.last_name) IN (
						('Cate', 'McQueen') ,
						('Cuba', 'Birch')
)
GROUP BY F.film_id, F.title
HAVING COUNT(*) > 1;

/* p.182 DDL 데이터 정의어, 테이블 생성, 수정, 삭제
생성- create문
수정- alter문
삭제 drop문

create table 테이블명 (
 컬럼명 컬럼타입 제약조건
 [..., 컬럼명 컬럼타입 제약조건 ]
)
*/

CREATE TABLE newbook (
 	-- auto_increment 자동 대리키 생성(INT, BIGINT 타입에서 가능)
 	-- PK(기본키) 중복없음(Unique), NOT NULL, ROW를 대표한다.
	bookid INT PRIMARY KEY AUTO_INCREMENT
	-- NOT NULL 값을 무조건 삽입
	, bookname VARCHAR(20) NOT NULL 
	-- NULL (NULL 허용) 값을 무조건 넣지 않아도 된다. (NULL 처리)
	, publisher VARCHAR(20) 
	-- CHECK 조건에 맞지 않는 값을 막기 위해. 
	, price INT NOT NULL CHECK (price >= 1000)
	-- DEFAULT는 값을 넣지 않으면 기본적으로 들어가는 디폴트 값
	-- CURRENT_TIMESTAMP, CURRENT_TIMESTAMP() 현재일시 값이 들어간다. 
	, created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
	-- ON UPDATE는 업데이트가 되었을 때 현재일시 값이 들어간다. 
	, updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO newbook
SET bookname = '준이가 준이했다.'
, publisher = '그린출판사'
, price = 50000;

INSERT INTO newbook
SET bookname = '아무거나'
, publisher =' 가은출판사'
, price = 80000;


-- 책의 가격을 60,000원으로 수정
UPDATE newbook
SET price = 60000
WHERE bookid = 1;

CREATE TABLE newcustomer(
		custid INT AUTO_INCREMENT PRIMARY KEY 
		, customer_name VARCHAR(5) NOT NULL
		, address VARCHAR(40) NOT NULL
		, phone VARCHAR(13)
		, created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
			, updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
									 ON UPDATE CURRENT_TIMESTAMP
);

-- 김그린, 대구 중구, 휴대폰 X

INSERT INTO newcustomer
SET customer_name = '김그린'
, address = '대구 중구';

-- 김그린 대구 남구로 이사, 이름도 김블루로 개명
-- 휴대폰 번호 010-0000-0000
UPDATE newcustomer
SET customer_name = '김블루'
, address = '대구 남구'
, phone = '010-0000-0000'
WHERE custid = 1;
-- updated_at 값도 함께 변경된다. 





