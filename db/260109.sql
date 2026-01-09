CREATE TABLE neworders (
	orderid INT AUTO_INCREMENT 
	, custid INT NOT NULL 
	, bookid INT NOT NULL
	, saleprice INT NOT NULL 
	, orderdate DATE NOT NULL 
	, PRIMARY KEY (orderid)
	, FOREIGN KEY (custid) REFERENCES newcustomer(custid)
	, FOREIGN KEY (bookid) REFERENCES newbook(bookid)
);

ALTER TABLE neworders
MODIFY COLUMN orderdate DATE NOT NULL DEFAULT (CURRENT_DATE);

ALTER TABLE neworders 
ADD isdn VARCHAR(13) NOT NULL;

INSERT INTO neworders
SET custid = 1
, bookid = 3
, saleprice = 20000;

-- DROP TABLE 테이블명 >> 실행하고 바로 삭제 

-- exam 데이터베이스만들기
CREATE DATABASE exam;

CREATE TABLE dept ( 
	deptno INT NOT NULL AUTO_INCREMENT 
	, dname VARCHAR(14) NOT NULL
	, loc VARCHAR(13)
	, PRIMARY KEY (deptno)
);

CREATE TABLE emp ( 
	empno INT NOT NULL AUTO_INCREMENT 
	, PRIMARY KEY (empno)
	, ename VARCHAR(10) NOT NULL COMMENT '사원명'
	 , job VARCHAR(9) COMMENT '업무'
	 , mgr INT COMMENT '직속상사'
	 , hiredate DATE NOT NULL
	 , sal INT NOT NULL COMMENT '월급여'
	 , comm INT COMMENT '판매수량'
	 , deptno INT COMMENT '부서번호'
	 , FOREIGN KEY (deptno) REFERENCES dept(deptno)
);

INSERT INTO dept(dname, loc) 
VALUES('ACCOUNTING','NEW YORK')
		,('RESEARCH', 'DALLAS')
		,('SALES', 'CHICAGO')
		, ('OPERATIONS', 'BOSTON');
	
INSERT INTO emp( ename, job, mgr, hiredate, sal, comm, deptno)
VALUES ('SMITH', 'CLERK', 7902, '1920-12-17', 800, NULL, 2)
,('ALLEN', 'SALESMAN', 7698, '1981-02-20', 1600, 300, 3)
,('WARD', 'SALESMAN', 7698, '1981-02-22', 1250, 500, 3)
,('JONES', 'MANAGER', 7839, '1981-04-02', 2975, NULL, 2);

INSERT INTO emp
(ename, job, mgr, hiredate, sal, comm, deptno)
VALUES
('MARTIN', 'SALESMAN', 7698, '1981-09-28', 1250, 1400, 3);

-- 사원이름, 부서지역 출력
SELECT e.ename AS 사원명, d.loc AS 부서지역
FROM emp e
JOIN dept d
ON e.deptno = d.deptno;

-- 2, 3번 근로자의 mgr는 martin이 되도록 해주세요. 
UPDATE emp
SET mgr = 5
WHERE empno = 2 OR empno = 3;

--  셀프 조인 
-- 근로자의 매니저 이름을 출력하자
SELECT e1.ename, e2.ename
FROM emp e1 -- 사원
LEFT JOIN emp e2 -- 매니저
ON e1.mgr = e2.empno;
-- WHERE e1.empno IN(2,3);

UPDATE emp
SET mgr = NULL 
WHERE empno IN (1, 4, 9);

/* p.243 뷰 view 
*/
-- 이 쿼리를 view로 만든다. view 쿼리를 담고 있는 공간. 
CREATE VIEW v_customer_info
AS 
SELECT c.first_name, c.last_name, a.address, t.city
FROM customer c
JOIN address a
ON a.address_id = c.address_id
JOIN city t
ON a.city_id = t.city_id;

-- 뷰 삭제
DROP VIEW v_customer_info;

SELECT * FROM v_customer_info
WHERE last_name >= 'S';

/*  p.250 인덱스
select 속도 향상을 위해 주로 사용한다.
내부적으로 인덱스 컬럼을 정렬한다. 

장점: select 속도 증가
단점: insert, update, delete 속도 감소, 용량 증가
		남발하면 오히려 select 속도 감소
		
순차 read, 랜덤 read 

인덱스를 통한 read => 랜덤 read
전수조사 (read) => 순차 read 

PK - Unique, NOT NULL, 인덱스 
*/


/* p. 325 데이터 모델링(설계, 디자인)  

1. 요구사항 수집 및 분석 (시장조사)
2. 설계 ( 개념적, 논리적, 물리적 모델링 )
3. 구현
4. 운영
5. 유지보수

p.342 테이블 관계
1:1 일대일
회사에 사원당 컴퓨터 1대씩 사용한다면
사원과 컴퓨터의 관계는 1:1이 된다.

1:N 일대다
회사에 컴퓨터 1대를 여러 명의 사원이 돌려쓴다면
컴퓨터와 사원의 관계는 1:N이 된다.

N:M 다대다 사람과 취미로 비유했을 때,
한 사람이 여러 개의 취미를 가질 수 있다.
하나의 취미는 여러 사람이 가질 수 있다. 

사람1 - 축구
사람1 - 농구
사람1 - 배구

ERD를 무료로 사용할 수 있는 사이트
www.erdcloud.com

FK 설정시
식별관계: FK가  PK 컬럼
비식별관계: FK가 일반 컬럼

복합키 : 컬럼 2개 이상이 PK


p.395 정규화
무결성 구조를 위한 작업
1~3, BC 정규형 
정규형을 하는 이유는 이상현상(아노말리 anomaly)을 없애기 위함
이상현상: insert, update, delete 후 데이터 상태가 이상하게 변하는 현상
*/

















