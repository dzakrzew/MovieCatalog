package com.rms.moviecatalog.requestobject;

import java.util.List;

public interface RequestObjectInterface {
    boolean isValid();
    List<String> getErrors();
}
