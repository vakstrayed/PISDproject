package com.ufrpe.dc.pisd.crimes.data;


import com.ufrpe.dc.pisd.crimes.beans.Crime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;

public interface CrimeDAO extends JpaRepository<Crime, Long> {

    @Query("SELECT cr FROM Crime cr where nome LIKE CONCAT('%',?1,'%')")
    ArrayList<Crime> findCrimeByName(String name);
}
