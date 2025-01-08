# Subquery used to get manager first and last name from employee database. This would be simpler with joins.
# See the query that follows this one.
select d.dept_no, d.dept_name, dd.manager_first_name, dd.manager_last_name, dd.from_date
from departments d
    join (
        select xdm.dept_no, xdm.from_date, ee.first_name as manager_first_name, ee.last_name as manager_last_name
        from dept_manager xdm
        join employees ee on xdm.emp_no = ee.emp_no
            where xdm.from_date < now() and xdm.to_date > now()
        ) dd on d.dept_no = dd.dept_no;

# Cleaner and and more efficient version of the query.
select d.dept_no, d.dept_name, e.first_name as manager_first_name, e.last_name as manager_last_name, dm.from_date
from departments d
    join dept_manager dm on d.dept_no = dm.dept_no and dm.from_date < now() and dm.to_date > now()
    join employees e on dm.emp_no = e.emp_no;


# Getting current count of employees for each department
select d.dept_no, d.dept_name, totals.dep_count
from departments d
    join (
        select sde.dept_no, count(sde.emp_no) as dep_count
        from dept_emp sde
        where sde.from_date < now() and sde.to_date > now()
        group by sde.dept_no) totals on totals.dept_no = d.dept_no;


# explain select d.dept_no, d.dept_name, totals.dep_count
# from departments d
#          join (
#     select sde.dept_no, count(sde.emp_no) as dep_count
#     from dept_emp sde
#     where sde.from_date < now() and sde.to_date > now()
#     group by sde.dept_no) totals on totals.dept_no = d.dept_no;


# Calculating min, max, and average salaries for each department
select d.*, min(ds.salary), avg(ds.salary), max(ds.salary)
from departments d
         join (select de.dept_no, de.emp_no, (select salary from salaries s where de.emp_no = s.emp_no and s.from_date < now() and s.to_date > now()) as salary
               from dept_emp de
               where de.from_date < now() and de.to_date > now()
               order by de.dept_no) ds on d.dept_no = ds.dept_no
group by d.dept_no;