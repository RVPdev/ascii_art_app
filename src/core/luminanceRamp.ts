function mapLuminanceToChar(luminance, ramp):
    # luminance may arrive slightly outside [0,1] from upstream math — decide how to handle that
    clamp luminance into [0, 1]

    # ramp.length characters means ramp.length - 1 "gaps" between them
    # pick an index formula that guarantees:
    #   luminance = 0   -> first character
    #   luminance = 1   -> last character
    #   values in between distribute roughly evenly
    index = <your formula here>

    return ramp[index]
