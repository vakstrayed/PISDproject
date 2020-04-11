package com.ufrpe.dc.pisd.crimes.controllers;


import com.ufrpe.dc.pisd.crimes.beans.Crime;
import com.ufrpe.dc.pisd.crimes.data.CrimeDAO;
import com.ufrpe.dc.pisd.crimes.view.FilterDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/crimes")
public class CrimeController {

    @Autowired
    private CrimeDAO crimeDAO;

    @CrossOrigin
    @GetMapping("/get/{id}")
    public ResponseEntity<Crime> getOne(@PathVariable Long id) {
        Crime result = crimeDAO.findById(id).get();
        if(result != null){
            return new ResponseEntity<Crime>(result, HttpStatus.OK);
        }else{
            return new ResponseEntity<Crime>(HttpStatus.NO_CONTENT);
        }
    }
    @CrossOrigin
    @GetMapping("/get/all")
    public ResponseEntity<List<Crime>> getAll() {
        List<Crime> result = crimeDAO.findAll();
        if(result != null){
            return new ResponseEntity<List<Crime>>(result, HttpStatus.OK);
        }else{
            return new ResponseEntity<List<Crime>>(HttpStatus.NO_CONTENT);
        }
    }
    @CrossOrigin
    @PostMapping("/save")
    public ResponseEntity<Crime> save(@RequestBody Crime crime) {
        System.out.println("Over Here");
        crimeDAO.save(crime);
        return new ResponseEntity<Crime>(crime, HttpStatus.OK);

    }

    @CrossOrigin
    @PostMapping("/get/filtro")
    public ResponseEntity<List<Crime>> getCrimeByName(@RequestBody FilterDTO filterDTO){

        return new ResponseEntity<List<Crime>>(crimeDAO.findCrimeByName(filterDTO.getNome()) , HttpStatus.OK);
    }





}
