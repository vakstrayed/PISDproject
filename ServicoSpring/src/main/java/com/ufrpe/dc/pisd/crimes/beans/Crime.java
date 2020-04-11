package com.ufrpe.dc.pisd.crimes.beans;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
@Table(name = "crime")
public class Crime implements Serializable {

    @Id
    @GeneratedValue
    private Long crime_id;
    private String cidade;

    @Temporal(TemporalType.DATE)
    @NotNull
    private Date data_ocorrencia;
    private Integer idade;

  private String nome;

  private String objeto_utilizado;

  private Integer qtd_vitimas;

  private String sexo;

  private String tipo_crime;
}
