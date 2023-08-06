package com.calendar.makehabits.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.calendar.makehabits.models.Activity;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {

}